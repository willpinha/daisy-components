<script lang="ts">
    import TagExamples from "./TagExamples.svelte";
    import { getTags } from "../utils/collection";

    const tags: string[] = getTags(); 
</script>

<div class="flex flex-col gap-8">
    <div class="flex items-center gap-2">
        <a href="/" class="btn btn-ghost px-3">
            <span class="hidden">Get back</span>

            <i class="fa-solid fa-arrow-left-long text-2xl"></i>
        </a>

        <h1 class="text-3xl font-bold text-primary">All tags</h1>
    </div>

    <div class="flex flex-col gap-20">
        {#each tags as tag}
            <TagExamples {tag} withArrow={false} smallTitle />
        {/each}
    </div>
</div>
