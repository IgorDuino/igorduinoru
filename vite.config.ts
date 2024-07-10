import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';

const config: UserConfig = defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['..']
    }
  },
  resolve: {
    alias: {
    }
  }
});

export default config;
