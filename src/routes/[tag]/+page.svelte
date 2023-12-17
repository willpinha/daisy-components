<script>
	import { onMount } from 'svelte';

	import Component from '$lib/components/Component.svelte';

	export let data;

	const { tag, components } = data;
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
