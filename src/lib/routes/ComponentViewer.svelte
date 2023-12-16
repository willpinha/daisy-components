<script>
    import { onMount } from "svelte";

    import Navbar from "../components/Navbar.svelte";

    export let params;

    let component;

    onMount(async () => {
        const path = `../examples/${params.tagName}/${params.componentName}.svelte`;

        console.log(path);

        component = (await import(path)).default;
    });
</script>

<svelte:component this={component} />
