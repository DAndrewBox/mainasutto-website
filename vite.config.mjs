import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reactPlugin = react({
  include: ['**/*.jsx', '**/*.js', '**/*.tsx', '**/*.ts'], // Explicitly include all file types
});

export default defineConfig({
  plugins: [reactPlugin, viteTsconfigPaths()],
  publicDir: 'public',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/public/assets'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    port: 8080,
    open: true,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  appType: 'spa',
  base: './',
});
