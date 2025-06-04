import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://shevek1.github.io',
  base: '/anabella',
  integrations: [react(), tailwind()],
});
