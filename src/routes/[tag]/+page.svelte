<script>
	import { onMount } from 'svelte';

	import Component from '$lib/components/Component.svelte';

	export let data;

	const { tag } = data;

	/**
	 * @type {import('svelte').ComponentType[]}
	 */
	let components = [];

	let loadingComponents = true;

	onMount(async () => {
		/**
		 * Ensures build will bundle all Svelte components inside examples folder
		 */
		const allModules = import.meta.glob('../../lib/examples/*/*.svelte');

		/**
		 * Filtered modules for tag
		 *
		 * @type {typeof allModules}
		 */
		const tagModules = {};

		for (const path in allModules) {
			if (path.includes(`examples/${tag}`)) {
				tagModules[path] = allModules[path];
			}
		}

		/**
		 * To load all components at once. An alternative would be to push directly to the
		 * "components" reactive variable, in which each component is loaded individually
		 */
		const tempComponents = [];

		for (const path in tagModules) {
			/**
			 * @type {any}
			 */
			const module = await tagModules[path]();

			const component = module.default;

			tempComponents.push(component);
		}

		components = tempComponents;

		loadingComponents = false;
	});
</script>

<div class="flex flex-col gap-8">
	<div class="flex items-center gap-2 border-b border-b-neutral">
		<a href="/" class="btn btn-ghost px-2">
			<i class="fa-solid fa-arrow-left-long text-3xl"></i>
		</a>

		<h1 class="text-4xl font-bold">#{tag}</h1>
	</div>

	{#if loadingComponents}
		<i>Loading examples...</i>
	{/if}

	{#each components as component}
		<Component {component} />
	{/each}
</div>
