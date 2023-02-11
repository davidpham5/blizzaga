import { defineConfig } from 'vite';
/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: './index.js',
      format: ['module'],
      name: 'data-privacy-component',
    },
    target: 'modules',
    mode: 'production',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['lit'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          lit: 'lit',
        },
      },
    },
  },
});
