<script>
	import { isMatch } from '$lib/utils/filter';

	let filter = '';

	export let data;

	let { tags, numExamples } = data;
</script>

<div class="flex flex-col items-center gap-4">
	<h1 class="text-center gap-2 text-4xl font-bold border-b border-neutral pb-2">
		Click on a <span class="text-primary">#tag</span> to show
		<i class="text-secondary">UI examples</i>
	</h1>

	<div>
		You can find
		<span class="badge badge-accent badge-outline badge-sm">{numExamples}</span> UI examples in
		<span class="badge badge-accent badge-outline badge-sm">{tags.length}</span> tags!
	</div>

	<label class="flex relative items-center">
		<i class="absolute pl-5 fa-solid fa-filter text-primary"></i>

		<input placeholder="Filter tags..." class="input input-bordered pl-12" bind:value={filter} />
	</label>

	<div class="flex flex-wrap max-w-md justify-center gap-2">
		{#each tags as tag}
			<a
				href="/{tag}"
				class="btn btn-sm btn-outline btn-primary"
				class:btn-disabled={!isMatch(tag, filter)}
			>
				#{tag}
			</a>
		{/each}
	</div>
</div>
