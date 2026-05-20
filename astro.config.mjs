// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// Server-mode op Vercel met ISR: paginas worden gerenderd op edge en gecached.
// Cache wordt automatisch ververst na expiration, of direct on-demand wanneer
// Strapi de /api/revalidate endpoint hit.
export default defineConfig({
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24, // 24u max fallback
      bypassToken: process.env.REVALIDATE_TOKEN,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
