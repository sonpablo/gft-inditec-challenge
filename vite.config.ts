import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    sourcemap: false,
  },
  server: {
    open: true,
  },
});
