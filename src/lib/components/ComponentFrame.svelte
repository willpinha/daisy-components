<script>
    import { theme } from "../utils/stores";

    export let frameSrc = "";

    let iframeLoaded = false;

    /**
     * Sync the "data-theme" iframe document attribute and the "theme" local storage key
     *
     * @param {HTMLIFrameElement} iframe
     * @param {string} theme
     */
    function syncTheme(iframe, theme) {
        const updateTheme = (/** @type {string} */ newTheme) => {
            iframe.contentWindow.document.documentElement.setAttribute(
                "data-theme",
                newTheme,
            );
        };

        updateTheme(theme);

        return {
            /**
             * @param {string} theme
             */
            update(theme) {
                updateTheme(theme);
            },
        };
    }
</script>

<div class="border border-neutral rounded-box p-6">
    <iframe
        use:syncTheme={$theme}
        on:load={() => {
            iframeLoaded = true;
        }}
        src={frameSrc}
        title={frameSrc}
        class:hidden={!iframeLoaded}
    >
    </iframe>

    {#if !iframeLoaded}
        <div class="flex flex-col items-center justify-center gap-1">
            <i class="fa-solid fa-hourglass-half animate-bounce text-2xl"></i>
            <span class="text-sm">Loading component...</span>
        </div>
    {/if}
</div>
