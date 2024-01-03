<script lang="ts">
    import { getTagExample } from "$lib/tags.js";

    export let data;

    const { tag, example } = data;

    const asyncTagExample = getTagExample(tag, example);
</script>

<svelte:head>
    <title>Playground | {tag} - {example}</title>
</svelte:head>


{#await asyncTagExample}
    Loading example...
{:then tagExample}
    {@html tagExample.html}
{/await}
