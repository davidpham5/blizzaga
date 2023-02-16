// Import rollup plugins
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { copy } from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import summary from 'rollup-plugin-summary';
import replace from '@rollup/plugin-replace';

export default {
  plugins: [
    // Entry point for application build; can specify a glob to build multiple
    // HTML files for non-SPA app
    html({
      input: 'index.html',
    }),
    // Resolve bare module specifiers to relative paths
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15,
      preventAssignment: true,
    }),

    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['images/**/*'],
    }),
  ],
  // input: 'index.js',
  output: {
    dir: 'build',
    name: 'data-privacy-component',
  },
  preserveEntrySignatures: 'strict',
};
