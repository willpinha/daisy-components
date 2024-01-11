<script>
    import { isMatch } from "../utils/filter";
    import { getTags, getNumberOfExamples } from "../utils/collection";

    let filter = "";

    const tags = getTags();
    const numExamples = getNumberOfExamples();
</script>

<div class="flex flex-col items-center gap-6">
	<h1 class="text-center gap-2 text-4xl font-bold">
		Click on a <span class="text-primary">#tag</span> to show
		<i class="text-secondary">UI examples</i>
	</h1>

	<div>
		🌸 You can find
		<span class="badge badge-accent badge-outline badge-sm">{numExamples}</span> UI examples in
		<span class="badge badge-accent badge-outline badge-sm">{tags.length}</span> tags!
		<a href="/all" class="link link-accent">See all here</a>
	</div>

	<label for="filter" class="flex relative items-center">
        <!-- Without it, Astro says it is an accessibility issue -->
        <span class="hidden">Filter</span>

		<i class="absolute pl-5 fa-solid fa-filter text-primary"></i>

		<input id="filter" placeholder="Filter tags..." class="input input-bordered pl-12" bind:value={filter} />
	</label>

	<div class="flex flex-wrap justify-center gap-2 max-w-xl">
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