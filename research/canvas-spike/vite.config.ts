import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Spike sandbox vite config.
// Mirrors Gxgen's setup: React plugin + `@/` path alias to src/.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5199,
    strictPort: false,
  },
});
