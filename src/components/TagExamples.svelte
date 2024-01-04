<script lang="ts">
    import { collection } from "../utils/collection";

    import Preview from "../components/Preview.svelte";

    export let tag: string;

    const examples = collection[tag];
</script>

<div class="flex flex-col gap-8">
    <div class="flex items-center gap-2">
        <a href="/" class="btn btn-ghost px-3">
            <span class="hidden">Get back</span>

            <i class="fa-solid fa-arrow-left-long text-2xl"></i>
        </a>

        <h1 class="text-3xl font-bold text-primary">#{tag}</h1>
    </div>

    <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
        {#each Object.entries(examples) as [example, html]}
            <Preview {tag} {example} {html} />
        {/each}
    </ul>
</div>
