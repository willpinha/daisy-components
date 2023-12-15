<script>
    import { allComponents, selectedTag } from "../utils/stores";
    import { isMatch } from "../utils/filter";

    let filter = "";
    let filteredTags = [];

    $: allTags = Object.keys($allComponents);

    $: {
        if (filter) {
            filteredTags = allTags.filter((tag) => {
                return isMatch(tag, filter);
            });
        } else {
            filteredTags = allTags;
        }
    }
</script>

<div class="flex flex-col gap-5">
    <!-- Input filter -->
    <input
        bind:value={filter}
        class="input input-bordered"
        placeholder="Filter tags..."
    />

    <!-- Tags -->
    <div class="flex gap-2 justify-center flex-wrap max-w-lg">
        {#each allTags as tag}
            {#each [1] as n}
                <button
                    class="btn btn-xs sm:btn-sm {tag === $selectedTag
                        ? 'btn-primary'
                        : 'btn-neutral'}"
                    class:btn-disabled={!filteredTags.includes(tag)}
                    on:click={() => ($selectedTag = tag)}
                >
                    {tag}
                </button>
            {/each}
        {/each}
    </div>
</div>
