import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://mushroomwise.org',
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel(),
  server: {
    host: '0.0.0.0',
    port: 4321
  }
});
