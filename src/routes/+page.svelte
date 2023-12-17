<script>
	import { isMatch } from '$lib/utils/filter';

	let filter = '';

	export let data;

	let { tags } = data;
</script>

<div class="flex flex-col items-center gap-6 p-6">
	<h1
		class="flex items-center justify-center gap-2 text-4xl font-bold border-b border-neutral pb-2"
	>
		<span class="text-3xl">🌸</span>

		<span>
			Click on a <span class="text-primary">#tag</span> to show
			<i class="text-secondary">UI examples</i>
		</span>
	</h1>

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
