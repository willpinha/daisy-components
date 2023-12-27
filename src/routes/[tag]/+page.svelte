<script lang="ts">
	import Preview from '$lib/components/Preview.svelte';
	import { getTagExamples, type TagExample } from '$lib/tags.js';

	export let data;

	const { tag } = data;
	let asyncExamples: Promise<TagExample[]> = getTagExamples(tag);
</script>

<div class="flex flex-col gap-8">
	<div class="flex items-center gap-2 border-b border-b-neutral">
		<a href="/" class="btn btn-ghost px-2">
			<i class="fa-solid fa-arrow-left-long text-3xl"></i>
		</a>

		<h1 class="text-4xl font-bold">#{tag}</h1>
	</div>

	{#await asyncExamples}
		Loading examples...
	{:then examples}
		{#each examples as example}
			<Preview {example} />
		{/each}
	{/await}
</div>
