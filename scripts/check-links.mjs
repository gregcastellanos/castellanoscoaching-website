import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://www.castellanoscoaching.com';
const bookingUrl =
 process.env.PUBLIC_GOOGLE_BOOKING_URL ||
 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ylZREqz5fTpWyNA3PNrZVMS0e-XxJWyPbR-eJGtrzbN1hkW23ls1o6_uraVSoi3FYc9_uc7zS';

const origin = new URL(siteUrl).origin;
const userAgent =
 'Mozilla/5.0 CastellanosCoachingLinkCheck/1.0 (+https://www.castellanoscoaching.com)';
const maxPages = Number(process.env.LINK_CHECK_MAX_PAGES || 80);
const timeoutMs = Number(process.env.LINK_CHECK_TIMEOUT_MS || 15000);
const forbiddenPatterns = [/calendar\.app\.google\/23eDUZW7ViT9Ru7m9/i];
const unavailableBookingPatterns = [
 /appointment not found/i,
 /appointment schedule.+not available/i,
 /currently unavailable/i,
 /no longer available/i,
 /couldn.t find.+appointment/i,
];

const checked = new Map();
const failures = [];

function normalizeUrl(value, base = siteUrl) {
 try {
  const url = new URL(value, base);
  url.hash = '';
  if (url.pathname !== '/' && url.pathname.endsWith('/index.html')) {
   url.pathname = url.pathname.slice(0, -'index.html'.length);
  }
  return url;
 } catch {
  return null;
 }
}

function shouldSkip(value) {
 return (
  !value ||
  value.startsWith('#') ||
  value.startsWith('mailto:') ||
  value.startsWith('tel:') ||
  value.startsWith('sms:') ||
  value.startsWith('data:') ||
  value.startsWith('javascript:')
 );
}

async function fetchWithTimeout(url) {
 const controller = new AbortController();
 const timer = setTimeout(() => controller.abort(), timeoutMs);
 try {
  return await fetch(url, {
   headers: { 'user-agent': userAgent },
   redirect: 'follow',
   signal: controller.signal,
  });
 } finally {
  clearTimeout(timer);
 }
}

async function checkHttpUrl(url, source) {
 const key = url.href;
 if (checked.has(key)) return checked.get(key);

 const result = { ok: false, status: 0, contentType: '', text: '' };
 checked.set(key, result);

 try {
  const response = await fetchWithTimeout(url);
  result.status = response.status;
  result.contentType = response.headers.get('content-type') || '';
  result.ok = response.ok;
  if (!response.ok) {
   failures.push(`${source}: ${url.href} returned HTTP ${response.status}`);
  }
  if (result.contentType.includes('text/html')) {
   result.text = await response.text();
  }
 } catch (error) {
  failures.push(`${source}: ${url.href} failed: ${error.message}`);
 }

 return result;
}

function extractUrls(html) {
 const urls = [];
 const pattern = /\b(?:href|src)=["']([^"']+)["']/gi;
 for (const match of html.matchAll(pattern)) {
  const value = match[1].trim();
  if (!shouldSkip(value)) urls.push(value);
 }
 return urls;
}

async function crawlLiveSite() {
 const queue = [new URL('/', origin)];
 const visitedPages = new Set();

 while (queue.length && visitedPages.size < maxPages) {
  const current = queue.shift();
  if (!current || visitedPages.has(current.href)) continue;
  visitedPages.add(current.href);

  const result = await checkHttpUrl(current, 'live crawl');
  if (!result.ok || !result.contentType.includes('text/html')) continue;

  for (const value of extractUrls(result.text)) {
   const url = normalizeUrl(value, current.href);
   if (!url || !['http:', 'https:'].includes(url.protocol)) continue;

   const source = current.href.replace(origin, '') || '/';
   await checkHttpUrl(url, source);

   if (url.origin === origin && !visitedPages.has(url.href) && url.pathname.endsWith('/')) {
    queue.push(url);
   }
  }
 }

 return visitedPages.size;
}

async function scanDirectory(directory) {
 if (!existsSync(directory)) return;
 const entries = await readdir(directory, { withFileTypes: true });
 for (const entry of entries) {
  const path = join(directory, entry.name);
  if (entry.isDirectory()) {
   await scanDirectory(path);
   continue;
  }
  const extension = extname(entry.name);
  if (!['.astro', '.css', '.html', '.js', '.json', '.md', '.mjs', '.ts'].includes(extension)) {
   continue;
  }
  const content = await readFile(path, 'utf8');
  for (const pattern of forbiddenPatterns) {
   if (pattern.test(content)) {
    failures.push(`${path}: contains deprecated Google Calendar short link`);
   }
  }
 }
}

async function checkBookingPage() {
 const url = normalizeUrl(bookingUrl);
 if (!url) {
  failures.push(`Booking URL is invalid: ${bookingUrl}`);
  return;
 }
 if (url.hostname !== 'calendar.google.com') {
  failures.push(`Booking URL should use the direct Google Calendar schedule URL: ${url.href}`);
 }

 const result = await checkHttpUrl(url, 'booking page');
 if (!result.ok) return;
 const body = result.text || '';
 for (const pattern of unavailableBookingPatterns) {
  if (pattern.test(body)) {
   failures.push(`Booking page appears inactive or unavailable: ${url.href}`);
   break;
  }
 }
}

await scanDirectory('src');
await scanDirectory('dist');
await checkBookingPage();
const crawledPages = await crawlLiveSite();

console.log(`Checked ${checked.size} URLs across ${crawledPages} live pages.`);

if (failures.length) {
 console.error('\nLink check failed:');
 for (const failure of failures) console.error(`- ${failure}`);
 process.exit(1);
}

console.log('All checked links passed.');
