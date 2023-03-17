import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: './', // This sets the base path for all generated URLs to './'
  // Other configuration options...
  plugins: [
    vanillaExtractPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: 'assets',
          dest: '',
        },
      ],
    }),
  ],
});
