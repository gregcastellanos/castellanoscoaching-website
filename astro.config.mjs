import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` if the production domain ever changes — it drives
// canonical URLs, Open Graph URLs, and the generated sitemap.
export default defineConfig({
  site: 'https://www.castellanoscoaching.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
