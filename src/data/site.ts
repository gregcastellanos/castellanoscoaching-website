// Single source of truth for business details used across the site.

export const SITE = {
 name: 'Castellanos Coaching',
 url: 'https://www.castellanoscoaching.com',
 phone: '(707) 395-7554',
 phoneHref: 'tel:+17073957554',
 email: 'gregcastellanoswork@gmail.com',
 calendly: 'https://calendly.com/castellanoscoaching',
 founder: 'Gregory Castellanos',
 areaServed: [
  'Marin County',
  'Greater Bay Area',
  'San Francisco',
  'Santa Rosa',
  'Sebastopol',
  'Sonoma County',
  'California',
  'United States',
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
