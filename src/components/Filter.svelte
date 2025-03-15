<script>
    import { isMatch } from "../utils/filter";
    import { getTags, getNumberOfExamples } from "../utils/collection";

    let filter = $state("");

    const tags = getTags();
    const numExamples = getNumberOfExamples();
</script>

<div class="flex flex-col items-center gap-8 px-4 py-8">
	<div class="flex flex-col items-center gap-2">
		<span class="text-sm">
			Made with
			<i class="fa-solid fa-heart fa-fw text-red-500"></i>
			by
			<a href="https://github.com/willpinha" class="link link-accent link-hover">
				willpinha
			</a>
			and
			<a href="https://github.com/willpinha/daisy-components/graphs/contributors" class="link link-accent link-hover">
				contributors
			</a>
		</span>

		<h1 class="text-4xl font-bold text-center">
			Click on a <span class="text-primary">#tag</span> to show
			<i class="text-secondary">components</i>
		</h1>
	</div>

	<div class="text-center">
		🌸 You can find
		<span class="badge badge-accent badge-outline badge-sm">{numExamples}</span> components in
		<span class="badge badge-accent badge-outline badge-sm">{tags.length}</span> tags!
	</div>

	<label for="filter" class="flex relative items-center">
        <!-- Without it, Astro says it is an accessibility issue -->
        <span class="hidden">Filter</span>

		<i class="absolute pl-5 fa-solid fa-filter text-primary"></i>

		<input id="filter" placeholder="Filter tags..." class="input input-bordered pl-12" bind:value={filter} />
	</label>

	<div class="flex flex-wrap justify-center gap-2">
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