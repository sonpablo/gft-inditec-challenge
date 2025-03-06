import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setupTests.ts',
    include: ['src/**/*.test.{ts,tsx}'],
    reporters: ['default', 'html'],
    coverage: {
      all: true,
      include: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}'],
      exclude: [
        'src/mocks/**',
        'src/test-utils/**',
        'src/**/*.styles.css',
        'src/main.tsx',
        'src/vite-env.d.ts',
      ],
    },
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
