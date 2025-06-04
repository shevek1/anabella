import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://shevek1.github.io',
  base: '/anabella',
  integrations: [react(), tailwind()],
});