# Castellanos Coaching — Northern California SEO Strategy

Goal: when a parent or adult in Northern California searches for executive function,
academic, social skills, independence, or parent coaching, Castellanos Coaching shows up
and earns the click. This document covers what is already implemented in the codebase and
the off-site work that turns it into rankings.

## 1. Who we are targeting

Primary searcher: a parent in Marin, Sonoma, San Francisco, the East Bay, or Silicon
Valley searching in a moment of stress. Secondary: neurodivergent adults and college
students searching for themselves.

Priority queries (page each one maps to):

| Query family | Example searches | Page |
| --- | --- | --- |
| Executive function + geo | executive function coach bay area, executive function coaching marin | Home, /services/executive-function-coaching/ |
| ADHD coaching + geo | adhd coach for teens bay area, adhd academic coach northern california | /services/academic-coaching/ |
| Autism / social skills + geo | social skills coaching autistic teen bay area | /services/social-skills-coaching/ |
| Life skills / launch | life skills coach for young adults california, failure to launch help bay area | /services/independence-life-skills-coaching/ |
| Parent support | parent coaching neurodivergent teen, adhd parent coach | /services/parent-family-coaching/ |
| Brand | castellanos coaching, gregory castellanos coach | Home, /about/ |

Because coaching is delivered remotely, the strategy is two-tier: local intent
(Marin / Bay Area terms, won through the site + Google Business Profile) and statewide
remote intent (Northern California / California terms, won through content and reviews).

## 2. Implemented on-site (this commit)

No visible page content or design was changed. Everything below is metadata and
structured data.

- **Balanced local + remote title tags** on all core pages (for example
  "Executive Function Coaching | Bay Area & Remote"), kept near 60 characters to
  reduce the chance of truncation in results.
- **Concise, search-friendly meta descriptions**, all under 160 characters, each naming
  the region and the audience. Note: Google may still rewrite or truncate snippets at
  its discretion; short length improves the odds, it does not guarantee display.
- **Truthful `areaServed` structured data**: Remote coaching, Sonoma County,
  Marin County, San Francisco Bay Area, Santa Rosa, Sebastopol, Petaluma, San Rafael,
  San Francisco, and California. Structured data must never imply routine in-person
  coverage of areas not actually served in person.
- **OfferCatalog** on the business schema listing all five services with their URLs, and
  **logo/image** properties so brand results can render correctly.
- **Person schema upgrades**: `knowsAbout` topics (executive function, ADHD, autism,
  learning differences, etc.) and a Sonoma County `homeLocation`. The business address
  locality is Sebastopol, where the practice is based.
- **WebSite schema** on the homepage tying the site to the business entity.
- **`geo.region` / `geo.placename` meta tags** (US-CA, Sonoma County) and **`og:locale`**.
- Already in place from earlier passes: canonical URLs, XML sitemap + robots.txt,
  FAQPage schema, BreadcrumbList schema, per-page Service schema, fast static pages
  (Core Web Vitals are a ranking input).

## 3. Off-site: the work that actually moves local rankings

In priority order. Items 1–3 matter more than everything else combined.

1. **Google Business Profile** (free, ~1 evening). Create a service-area business
   profile: category "Life coach" (secondary: "Educational consultant", "Tutor"),
   service area set to the counties actually served in person (Sonoma, Marin, and
   nearby), hours, booking link
   (https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ylZREqz5fTpWyNA3PNrZVMS0e-XxJWyPbR-eJGtrzbN1hkW23ls1o6_uraVSoi3FYc9_uc7zS), the five services listed, photos.
   This is what puts you in the map pack for "executive function coach near me".
2. **Reviews on Google.** Ask established adult clients, or parents of clients, for an
   honest review in their own words; one ask, at a natural high point such as the end of
   a successful engagement. Do not suggest wording, do not ask for a particular rating,
   and never incentivize reviews (both Google policy and FTC rules prohibit it).
   Review count + recency is the strongest map-pack ranking factor.
3. **Google Search Console.** Verify the domain, submit
   https://www.castellanoscoaching.com/sitemap-index.xml, and check monthly which
   queries get impressions but no clicks; retitle those pages.
4. **Directory citations** (consistent name / phone / URL everywhere):
   Psychology Today, ADDitude directory, CHADD professional directory, ACO
   (ADHD Coaches Organization), Yelp, Nextdoor (Sonoma and Marin), care.com. These are both
   backlinks and direct referral sources for exactly this audience.
5. **One local anchor page later** (when you are ready to add content): a single
   "Coaching in Sonoma, Marin & the Bay Area" page targeting local modifiers, linked from the
   footer. One good page beats ten thin city pages, which Google now penalizes.
6. **Content flywheel** (one piece per month, tied to real search demand):
   "How to help an ADHD teen start homework", "Executive function checklist for college
   freshmen", "Failure to launch: what actually helps". Each earns long-tail traffic
   statewide and feeds the email list via the Family Launch Checklist.
7. **Local backlinks**: Marin/Sonoma parent groups, SELPA/CAC newsletters, school
   counselor resource lists, neurodivergent-parent Facebook groups (as a resource, not
   an ad), guest spots on local parenting podcasts.

## 4. Measurement

- Search Console: impressions/clicks for "executive function coach bay area" and
  sibling queries; expect movement in 6–10 weeks after GBP + citations.
- Google Business Profile insights: calls, direction requests, booking clicks.
- Cloudflare Web Analytics: which pages convert visits into /contact/ or booking clicks.

## 5. Guardrails

- Never buy links or spin up doorway pages per city; the expanded schema + GBP covers
  geography honestly.
- Keep every claim verifiable (credentials, testimonials with permission).
- Keep titles/descriptions in sync with this strategy when pages are added; keep all
  descriptions ≤160 characters and titles ≤60 where possible, remembering that Google
  treats these as suggestions and may rewrite or truncate what it shows.
