// Single source of truth for business details used across the site.

const email = 'gregcastellanoswork@gmail.com';
const defaultGoogleBookingUrl = 'https://calendar.app.google/23eDUZW7ViT9Ru7m9';
const fallbackBookingUrl = `mailto:${email}?subject=${encodeURIComponent(
 'Free consultation request'
)}&body=${encodeURIComponent(`Hi Gregory,

I'm interested in scheduling a free consultation.

A little about our situation:
- Who the coaching would be for:
- What's feeling hardest right now:
- Location, city or remote:
- A few times that usually work:

Thanks!`)}`;

const googleBookingUrl =
 import.meta.env.PUBLIC_GOOGLE_BOOKING_URL || defaultGoogleBookingUrl;

const isGoogleBookingConfigured =
 googleBookingUrl === defaultGoogleBookingUrl || /^https?:\/\//.test(googleBookingUrl);

if (import.meta.env.DEV && !isGoogleBookingConfigured) {
 console.warn(
  'PUBLIC_GOOGLE_BOOKING_URL is invalid. Booking links will use a prefilled email fallback until a valid Google Appointment Schedule URL is added.'
 );
}

export const BOOKING = {
 url: isGoogleBookingConfigured ? googleBookingUrl : fallbackBookingUrl,
 isConfigured: isGoogleBookingConfigured,
 label: isGoogleBookingConfigured
  ? 'Schedule a Free Consultation'
  : 'Email to Schedule',
 shortLabel: isGoogleBookingConfigured
  ? 'Schedule a Free Consultation'
  : 'Email to Schedule',
 ariaLabel: isGoogleBookingConfigured
  ? 'Schedule a free consultation with Gregory Castellanos in a new tab'
  : 'Email Gregory Castellanos to schedule a free consultation',
 target: isGoogleBookingConfigured ? '_blank' : undefined,
 rel: isGoogleBookingConfigured ? 'noopener noreferrer' : undefined,
 reassurance:
  isGoogleBookingConfigured
   ? 'Choose an available daytime or limited evening appointment. Consultations are held remotely through Google Meet.'
   : 'Online scheduling is being connected. For now, send a quick email and Gregory will follow up with available times.',
} as const;

export const SERVICE_MODEL = {
 summary:
  'Most coaching is available remotely through Google Meet, with flexible daytime scheduling and limited evening and in-person availability.',
 remote:
  'Remote coaching is available to clients and families wherever services can appropriately be provided.',
 inPerson:
  'Limited in-person coaching is available in Marin, Sonoma County, and nearby areas.',
 scheduling:
  'Flexible daytime appointments are available and encouraged. Limited evening appointments remain available for working parents and clients who cannot meet during the day.',
 consultation:
  'Most consultations are held remotely through Google Meet. Daytime and limited evening appointments are available.',
} as const;

export const SITE = {
 name: 'Castellanos Coaching',
 url: 'https://www.castellanoscoaching.com',
 phone: '(707) 395-7554',
 phoneHref: 'tel:+17073957554',
 email,
 googleBookingUrl,
 founder: 'Gregory Castellanos',
 areaServed: [
  'Northern California',
  'Marin County',
  'San Rafael',
  'Mill Valley',
  'Novato',
  'Sonoma County',
  'Santa Rosa',
  'Sebastopol',
  'Petaluma',
  'Napa County',
  'San Francisco',
  'North Bay',
  'East Bay',
  'Oakland',
  'Berkeley',
  'Silicon Valley',
  'San Jose',
  'San Francisco Bay Area',
  'Sacramento',
  'California',
 ],
} as const;

export interface ServiceEntry {
 slug: string;
 title: string;
 navLabel: string;
 short: string;
}

export const SERVICES: ServiceEntry[] = [
 {
  slug: 'executive-function-coaching',
  title: 'Executive Function Coaching',
  navLabel: 'Executive Function',
  short:
   'Planning, time management, organization, task initiation, follow-through, and systems that fit how your brain works.',
 },
 {
  slug: 'academic-coaching',
  title: 'Academic Coaching',
  navLabel: 'Academic',
  short:
   'Study systems, motivation, and school confidence for children, teens, and students with ADHD, autism, and learning differences.',
 },
 {
  slug: 'social-skills-coaching',
  title: 'Social Skills & Relationship Coaching',
  navLabel: 'Social Skills',
  short:
   'Conversation, friendship, dating, family communication, and workplace interaction practiced honestly and respectfully.',
 },
 {
  slug: 'independence-life-skills-coaching',
  title: 'Independence & Life Skills Coaching',
  navLabel: 'Independence & Life Skills',
  short:
   'Routines, money, work, home responsibilities, self-advocacy, and daily-life structure for clients building a life of their own.',
 },
 {
  slug: 'parent-family-coaching',
  title: 'Parent & Family Coaching',
  navLabel: 'Parent & Family',
  short:
   'Practical guidance for parents to reduce conflict, strengthen cooperation, and support their child without carrying everything alone.',
 },
];

export const NAV = [
 { href: '/services/', label: 'Services' },
 { href: '/castellanos-compass/', label: 'How It Works' },
 { href: '/about/', label: 'About Gregory' },
 { href: '/resources/', label: 'Resources' },
 { href: '/faq/', label: 'FAQ' },
 { href: '/contact/', label: 'Contact' },
];
