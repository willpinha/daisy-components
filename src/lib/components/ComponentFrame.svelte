<script>
    import { onMount } from "svelte";

    export let frameSrc = "";

    let currentTheme;

    let iframe;

    let temp;

    function test(node) {
        node.setAttribute("data-theme", "cupcake");
    }

    onMount(() => {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === "attributes") {
                    currentTheme =
                        document.documentElement.getAttribute("data-theme");
                }
            }
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    });

    $: {
        if (iframe) {
            iframe.contentWindow.document.documentElement.setAttribute(
                "data-theme",
                currentTheme,
            );
        }
    }
</script>

<input class="input input-bordered" bind:value={temp} />

<iframe bind:this={iframe} src={frameSrc} title={frameSrc}> </iframe>
