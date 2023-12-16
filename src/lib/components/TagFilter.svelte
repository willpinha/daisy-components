<script>
    import { isMatch } from "../utils/filter";

    import ContentPanel from "./ContentPanel.svelte";

    let filter = "";
</script>

<ContentPanel>
    <div class="flex flex-col items-center gap-6 p-6">
        <h1 class="text-4xl font-bold text-center border-b border-neutral pb-2">
            🌸 Click on a tag to show
            <i class="text-secondary">UI examples</i>
        </h1>

        <label class="flex relative items-center">
            <i class="absolute pl-5 fa-solid fa-filter text-primary"></i>

            <input
                placeholder="Filter tags..."
                class="input input-bordered pl-12"
                bind:value={filter}
            />
        </label>

        <div class="flex flex-wrap justify-center gap-2">
            {#each ["navbar", "blog", "sidebar", "avatar", "landingPage", "opa", "olha", "eita", "opaopaopa", "eitaeitaeita", "olhaolhaolha"] as tag}
                <a
                    href="#/{tag}"
                    class="btn btn-sm btn-outline btn-primary"
                    class:btn-disabled={!isMatch(tag, filter)}
                >
                    {tag}
                </a>
            {/each}
        </div>
    </div>
</ContentPanel>
