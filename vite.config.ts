import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
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
