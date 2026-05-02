import { defineConfig } from 'tsup';
import cssModulesPlugin from 'esbuild-plugin-css-modules';

export default defineConfig({
  entry: ['src/lib/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  tsconfig: './tsconfig.lib.json',
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next'],
  esbuildPlugins: [cssModulesPlugin()],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
