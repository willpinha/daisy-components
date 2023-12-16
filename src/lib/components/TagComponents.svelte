<script>
    import { onMount } from "svelte";
    import { metadata } from "../utils/stores";

    import ContentPanel from "../components/ContentPanel.svelte";
    import ComponentFrame from "./ComponentFrame.svelte";

    export let tagName = "";
    const componentNames = $metadata[tagName] ?? [];
</script>

<ContentPanel>
    <div class="flex flex-col gap-10">
        <h1
            class="flex items-center gap-2 text-4xl font-bold border-b border-neutral pb-2"
        >
            <a href="#/" class="btn btn-ghost">
                <i class="fa-solid fa-arrow-left-long text-2xl"></i>
            </a>
            <span class="line-clamp-1 break-all">
                {tagName}
            </span>
        </h1>

        {#each componentNames as componentName}
            <span>{componentName}</span>

            <ComponentFrame frameSrc="#/{tagName}/{componentName}" />
        {/each}
    </div>
</ContentPanel>
