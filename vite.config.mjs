import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // <--- Esto hace que las rutas de CSS, JS e imágenes nunca fallen en la web
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        letters: resolve(__dirname, 'src/views/letters.html'),
      },
    },
  },
});