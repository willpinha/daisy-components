import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from "svelte-preprocess";

import { readdirSync } from "fs";

/**
 * Explicitly defines all routes that should be pre-rendered. This prevents dynamic route errors
 * from happening during the build
 * 
 * Since we use adapter-static, all routes must be returned in this function, otherwise they may 
 * not be in the final output
 */
function prerenderEntries() {
	const entries = ["/"];

	const tags = readdirSync("examples", { withFileTypes: true })
		.filter((tag) => tag.isDirectory());

	for (const tag of tags) {
		entries.push(`/${tag.name}`);

		const examples = readdirSync(`examples/${tag.name}`, { withFileTypes: true })
			.filter((example) => example.isFile() && example.name.endsWith(".html"));

		for (const example of examples) {
			const name = example.name.replace(".html", "");

			entries.push(`/playground/${tag.name}/${name}`);
		}
	}

	return entries;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		prerender: {
			entries: prerenderEntries() 
		}
	},
	preprocess: [sveltePreprocess(), vitePreprocess()]
};

export default config;
