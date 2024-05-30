import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

const isLibMode = process.env.VITE_BUILD_MODE === 'lib';

export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': `"${process.env.NODE_ENV}"` },
  build: {
    ...(isLibMode
      ? {
          lib: {
            entry: resolve(__dirname, 'src/main.jsx'),
            name: 'SearchLib',
            fileName: 'search-lib',
          },
          rollupOptions: {
            // external: ['react'],
            // output: {
            //   globals: {
            //     react: 'React',
            //   },
            // },
          },
        }
      : {
          outDir: 'dist',
          rollupOptions: {
            input: resolve(__dirname, 'index.html'),
          },
        }),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  ...(isLibMode
    ? {}
    : {
        root: './',
        server: {
          open: true,
        },
      }),
});
