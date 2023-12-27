<script lang="ts">
	import Preview from '$lib/components/Preview.svelte';
	import { getTagExamples, type TagExample } from '$lib/tags.js';

	export let data;

	const { tag } = data;
	let asyncExamples: Promise<TagExample[]> = getTagExamples(tag);
</script>

<div class="flex flex-col gap-8">
	<div class="flex items-center gap-2">
		<a href="/" class="btn btn-ghost px-3">
			<i class="fa-solid fa-arrow-left-long text-2xl"></i>
		</a>

		<h1 class="text-3xl font-bold text-primary">#{tag}</h1>
	</div>

	{#await asyncExamples}
		Loading examples...
	{:then examples}
		<ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
			{#each examples as example}
				<Preview {example} />
			{/each}
		</ul>
	{/await}
</div>
