<script>
    import Navbar from "../components/Navbar.svelte";
    import TagComponents from "../components/TagComponents.svelte";

    export let params = {};
</script>

<Navbar />

<TagComponents tagName={params.tagName} />
