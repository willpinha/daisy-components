<script>
	import { onMount } from 'svelte';

	import Component from '$lib/components/Component.svelte';

	export let data;

	const { tag, componentNames } = data;
	/**
	 * @type {import('svelte').ComponentType[]}
	 */
	let components = [];

	onMount(async () => {
		const importPath = `../../lib/examples/${tag}`;

		for (const name of componentNames) {
			const module = await import(/* @vite-ignore */ `${importPath}/${name}`);

			/**
			 * @type {import('svelte').ComponentType}
			 */
			const componentClass = module.default;

			components = [...components, componentClass];
		}
	});
</script>

<div class="flex items-center gap-2 border-b border-b-neutral">
	<a href="/" class="btn btn-ghost px-2">
		<i class="fa-solid fa-arrow-left-long text-3xl"></i>
	</a>

	<h1 class="text-4xl font-bold">#{tag}</h1>
</div>

<div class="flex flex-col">
	{#each components as component}
		<svelte:component this={component}></svelte:component>
	{/each}
</div>
