import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://willpinha.github.io/daisy-components",
  integrations: [tailwind(), svelte()],
  base: "/daisy-components"
});
