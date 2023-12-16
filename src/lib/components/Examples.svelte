<script>
    import { allComponents, selectedTag } from "../utils/stores";

    $: selectedComponents = $allComponents[$selectedTag] ?? [];
</script>

<div class="flex flex-col w-full gap-4">
    {#each selectedComponents as c}
        <div class="p-4 rounded-box border border-neutral">
            <div class="shadow-lg">
                <svelte:component this={c} />
            </div>
        </div>
    {/each}
</div>
