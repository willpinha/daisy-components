<script>
    import Navbar from "../components/Navbar.svelte";
    import ContentPanel from "../components/ContentPanel.svelte";

    export let params = {};
</script>

<Navbar />

<ContentPanel>
    <div class="flex flex-col gap-2">
        <h1
            class="flex items-center gap-2 text-4xl font-bold border-b border-neutral pb-2"
        >
            <a href="#/" class="btn btn-ghost">
                <i class="fa-solid fa-arrow-left-long text-2xl"></i>
            </a>
            <span class="line-clamp-1 break-all">
                {params.tagName}
            </span>
        </h1>
    </div>
</ContentPanel>
