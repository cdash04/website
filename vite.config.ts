import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess(),
    onwarn: (warning, handler) => {
      const { code, frame } = warning;
      if (code === "css-unused-selector")
          return;

      handler(warning);
  },
  })],
})
