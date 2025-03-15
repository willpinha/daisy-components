<script lang="ts">
    import { collection } from "../utils/collection";

    import Preview from "../components/Preview.svelte";

    interface Props {
        tag: string;
    }

    let { tag }: Props = $props();

    const examples = collection[tag];
</script>

<div class="flex flex-col gap-8 px-4 py-8">
    {#each Object.entries(examples) as [example, html]}
        <Preview {tag} {example} {html} />
    {/each}
</div>
