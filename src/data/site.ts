// Single source of truth for business details used across the site.

export const SITE = {
  name: 'Castellanos Coaching',
  url: 'https://www.castellanoscoaching.com',
  phone: '(707) 395-7554',
  phoneHref: 'tel:+17073957554',
  email: 'gregcastellanoswork@gmail.com',
  calendly: 'https://calendly.com/castellanoscoaching',
  founder: 'Greg Castellanos',
  areaServed: [
    'Sebastopol',
    'Santa Rosa',
    'Bodega',
    'Occidental',
    'Sonoma County',
    'Marin County',
    'Bay Area',
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
      'Planning, time management, organization, and follow-through — real systems that fit how your brain actually works.',
  },
  {
    slug: 'academic-coaching',
    title: 'Academic Coaching',
    navLabel: 'Academic',
    short:
      'Study systems, motivation, and school confidence for students with ADHD, autism, and learning differences.',
  },
  {
    slug: 'social-skills-coaching',
    title: 'Social Skills & Relationship Coaching',
    navLabel: 'Social Skills',
    short:
      'Conversation, friendship, dating, and workplace communication — practiced honestly, without masking scripts.',
  },
  {
    slug: 'independence-life-skills-coaching',
    title: 'Independence & Life Skills Coaching',
    navLabel: 'Independence & Life Skills',
    short:
      'Routines, money, work, and daily-life structure for young adults and adults building a life of their own.',
  },
  {
    slug: 'parent-family-coaching',
    title: 'Parent & Family Coaching',
    navLabel: 'Parent & Family',
    short:
      'Practical guidance for parents — reduce conflict, build buy-in, and support your teen without carrying everything yourself.',
  },
];

export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/castellanos-compass/', label: 'The Compass' },
  { href: '/about/', label: 'About Greg' },
  { href: '/resources/', label: 'Resources' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];
