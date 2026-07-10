// JSON-LD builders shared across pages.
import { SITE } from './site';

export const personSchema = {
 '@type': 'Person',
 '@id': `${SITE.url}/#gregory`,
 name: 'Gregory Castellanos',
 jobTitle: 'Executive Function & Life Skills Coach',
 description:
  `Educator and executive function coach with 15+ years of experience and a Master of Arts in Teaching, supporting neurodivergent children, teens, adults, and families.`,
 email: SITE.email,
 telephone: SITE.phone,
 worksFor: { '@id': `${SITE.url}/#business` },
 url: `${SITE.url}/about/`,
};

export const businessSchema = {
 '@context': 'https://schema.org',
 '@type': 'ProfessionalService',
 '@id': `${SITE.url}/#business`,
 name: SITE.name,
 url: SITE.url,
 telephone: SITE.phone,
 email: SITE.email,
 description:
  'Remote executive function, academic, social skills, independence, and family coaching for neurodivergent children, teens, adults, and families. Flexible daytime appointments are available, with limited evening and in-person availability in Marin County, Sonoma County, and nearby areas.',
 founder: personSchema,
 address: {
  '@type': 'PostalAddress',
  addressLocality: 'Marin County',
  addressRegion: 'CA',
  addressCountry: 'US',
 },
 areaServed: [
  ...SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
  { '@type': 'Country', name: 'United States' },
 ],
 priceRange: '$$',
};

export function serviceSchema(opts: {
 name: string;
 description: string;
 path: string;
}) {
 return {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  url: `${SITE.url}${opts.path}`,
  provider: { '@id': `${SITE.url}/#business` },
  serviceType: opts.name,
  areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
 };
}

export function faqSchema(items: { q: string; a: string }[]) {
 return {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
   '@type': 'Question',
   name: item.q,
   acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
 };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
 return {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, i) => ({
   '@type': 'ListItem',
   position: i + 1,
   name: crumb.name,
   item: `${SITE.url}${crumb.path}`,
  })),
 };
}
