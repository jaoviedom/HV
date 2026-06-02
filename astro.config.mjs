// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://su-usuario.github.io',
  base: '/nombre-del-repositorio',
  vite: {
    plugins: [tailwindcss()]
  }
});