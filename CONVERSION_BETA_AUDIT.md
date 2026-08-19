# Castellanos Coaching Conversion Beta Audit

This audit treats the current homepage as the control and supports the `/beta` conversion experiment.

## Current Implementation

- Framework / CMS: Astro static site with Cloudflare adapter.
- Homepage: `src/pages/index.astro`, mostly self-contained page content and page-scoped styles.
- Shared components: `BaseLayout`, `Header`, `Footer`, `MobileCta`, `CtaBand`, `ServiceCard`, `TestimonialSlider`, `FaqItem`, `CompassMark`, `HillsDivider`, `Motion`.
- Design tokens: CSS variables in `src/styles/global.css` for navy, gold, paper surfaces, typography, spacing, radii, and shadows.
- Typography: Montserrat Variable for headings and Inter Variable for body copy.
- Navigation: sticky header with services, Compass, About, Resources, FAQ, Contact, and a scheduling CTA.
- CTAs: centralized through `BOOKING` in `src/data/site.ts`; booking link opens the Google Appointment Schedule.
- Forms: no homepage form; conversion path is external Google booking, phone, or email.
- Scheduling integration: direct Google Calendar Appointment Schedule URL with mailto fallback for invalid environment values.
- Testimonials: four authentic client quotes in the homepage data, rendered by `TestimonialSlider`.
- Compass content: concise overview of Clarity, Alignment, Foundation, Expansion, with Agency implied by the broader framework.
- About content: Greg photo, credentials, practical experience, and relationship-building proof appear early and mid-page.
- SEO metadata: Base layout supplies title, description, canonical, Open Graph, Twitter, sitemap, favicon, and JSON-LD.
- Analytics: no analytics script found in the inspected source.
- Responsive behavior: desktop grids collapse to two columns and then one column; sticky mobile CTA appears after primary CTA leaves view.
- Accessibility: skip link, landmark structure, descriptive alt text, ARIA labels for carousel, mobile nav, and booking CTAs.
- Performance risks: ambient background video loads after page load; hero image is eager and prioritized; testimonial carousel is lightweight.

## Keep

- `Clarity. Systems. Independence.` as a memorable brand asset.
- Greg's real portrait and personal credibility near the top of the page.
- Direct, practical positioning around neurodivergent teens, young adults, adults, and families.
- The “Real life, not worksheets” differentiator.
- The Castellanos Compass framework.
- Authentic client testimonials.
- Centralized booking configuration and the direct Google Calendar URL.
- Sticky mobile CTA behavior.

## Improve

- Make the hero more immediately specific about who the work is for and what independence means in daily life.
- Use one beta CTA phrase: `Book a Fit Call`.
- Move concrete real-life examples earlier so visitors recognize their own situation sooner.
- Put proof before the final conversion ask.
- Clarify how coaching differs from therapy, tutoring, and adult management without diminishing those supports.
- Present the Compass as useful and flexible without letting methodology dominate the page.

## Consolidate

- Remote coaching and location details can be folded into the hero/process rather than standing as a full early section.
- Audience cards and service cards overlap; the beta can emphasize life contexts and then link lightly to services.
- “Why coaching,” “why families choose Gregory,” and FAQ can become a tighter sequence: difference, proof, uncertainty reduction.

## Remove / Reduce

- Reduce repeated early booking asks.
- Reduce broad service-category listing on the homepage beta.
- Reduce deficit-heavy phrases such as “breaking down,” “struggles,” and “overwhelm” where stronger agency-based language can carry the idea.
- Reduce methodology before the visitor understands the desired future.

## Do Not Touch

- Production homepage at `/`.
- The verified booking URL.
- Existing testimonials.
- Existing credentials and claims.
- Service pages, Compass page, contact page, and SEO-critical production metadata.

## Baseline Score

1. Audience clarity: 8/10. The page names neurodivergent children, teens, adults, and families clearly, though the range is broad.
2. Outcome clarity: 7/10. Independence and systems are present, but the desired future could be more concrete.
3. Offer clarity: 8/10. Coaching categories and free consultation are understandable.
4. Personal relevance: 7/10. Some examples feel specific, but more everyday-life recognition could happen earlier.
5. Differentiation: 8/10. “Real life, not worksheets” and “not tutoring” are strong.
6. Specificity: 7/10. Strong in places, but the homepage still leans on category language in early sections.
7. Credibility: 9/10. Experience, M.A.T., portrait, Compass, and testimonials are strong.
8. Proof: 7/10. Testimonials are authentic, but proof appears after several sections.
9. CTA clarity: 7/10. Scheduling works, but CTA language varies between schedule, consultation, call, meet, and contact.
10. Scanability: 8/10. Strong headings and grids, though there are many sections.
11. Risk reduction: 7/10. FAQ helps, but more uncertainty could be answered before the final CTA.
12. Mobile usability: 8/10. Layout and sticky CTA are solid; long page length remains a mild friction point.

Current Score: 91/120
