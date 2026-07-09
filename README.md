# Castellanos Coaching — Website

Marketing site for [Castellanos Coaching](https://www.castellanoscoaching.com):
executive function, academic, social skills, independence, and parent/family
coaching for neurodivergent teens, young adults, and adults in Sonoma County,
Marin, the Bay Area, and remote nationwide.

Built with [Astro](https://astro.build) as a fully static site — no client-side
framework, no CMS, no database. The only JavaScript shipped to visitors is the
mobile navigation toggle.

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  data/site.ts          # Phone, email, Calendly link, service list, nav — edit business details here
  data/schema.ts        # JSON-LD structured data builders (LocalBusiness, Service, FAQ, breadcrumbs)
  styles/global.css     # Design system: colors, type scale, buttons, cards, FAQ styles
  layouts/
    BaseLayout.astro    # <head> with SEO/OG meta, header, footer
    ServiceLayout.astro # Shared structure for the five service pages
  components/           # Header, Footer, CtaBand, ServiceCard, CompassDiagram, FaqItem, ...
  pages/                # One file per URL; service pages under pages/services/
public/                 # favicon, robots.txt, og-image.png (served as-is)
scripts/
  generate-images.mjs   # Regenerates og-image.png + apple-touch-icon.png (node scripts/generate-images.mjs)
```

## Common edits

- **Phone, email, Calendly, service areas:** `src/data/site.ts` — used everywhere automatically.
- **Copy:** each page's text lives in its file under `src/pages/`. Service-page
  copy is a structured object at the top of each file in `src/pages/services/`.
- **Colors and fonts:** CSS custom properties at the top of `src/styles/global.css`.
- **Greg's photo:** add `public/greg.jpg`, then in `src/pages/about.astro`
  replace the marked `portrait-placeholder` block with the `<img>` tag shown in
  the comment there.
- **Domain change:** update `site` in `astro.config.mjs` and the sitemap URL in
  `public/robots.txt`.

## Deployment

### Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and use:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy, then add the custom domain (`www.castellanoscoaching.com`) under
   **Custom domains** and follow the DNS instructions.

Every push to the production branch redeploys automatically.

### GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages
on every push to `main`. Enable it once in the repo settings:
**Settings → Pages → Source → GitHub Actions**.

If deploying to a `*.github.io` URL instead of the custom domain, set `site`
(and `base`, for project pages) in `astro.config.mjs` per the
[Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Adding a blog later

The structure is blog-ready: create `src/content/blog/` with Markdown files and
an `src/pages/blog/` listing page using Astro
[content collections](https://docs.astro.build/en/guides/content-collections/).
`BaseLayout` already accepts `ogType="article"` for post pages, and the sitemap
picks up new pages automatically.

## SEO notes

- Every page sets a unique `<title>`, meta description, canonical URL, and
  Open Graph tags via `BaseLayout` props.
- Structured data: `ProfessionalService` (home + contact), `Service` on each
  service page, `FAQPage` on the FAQ, `Person` on About, breadcrumbs on
  interior pages.
- `@astrojs/sitemap` generates `sitemap-index.xml` at build time;
  `public/robots.txt` points to it.
