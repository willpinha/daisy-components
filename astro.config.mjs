import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://daisy-components.pinha.link",
  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()],
  },
});