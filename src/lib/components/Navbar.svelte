<script>
    import { theme } from "../utils/stores";

    import logo from "../../assets/logo.svg";

    const themes = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
    ];

    function updateTheme(newTheme) {
        $theme = newTheme;
    }
</script>

<nav class="navbar bg-base-300 justify-between">
    <!-- Left side -->
    <div class="flex gap-2">
        <img src={logo} class="w-12" alt="Daisy Catalog" />

        <div class="flex font-bold text-2xl">
            Daisy
            <span class="text-primary">Catalog</span>
        </div>
    </div>

    <!-- Right side -->
    <div class="flex gap-0 sm:gap-2">
        <!-- GitHub -->
        <a
            href="https://github.com/willpinha/daisy-catalog"
            class="btn btn-ghost"
        >
            <i class="fa-brands fa-github text-lg"></i>
            <span class="hidden sm:flex">GitHub</span>
        </a>

        <!-- Themes -->
        <details class="dropdown dropdown-bottom dropdown-end">
            <summary class="btn btn-ghost">
                <i class="fa-solid fa-palette"></i>
                <span class="hidden sm:flex">Themes</span>

                <i class="fa-solid fa-angle-down"></i>
            </summary>

            <div
                class="flex flex-col dropdown-content gap-2 mt-2 z-[1] p-4 shadow-2xl bg-base-200 rounded-box w-64 h-72 overflow-y-scroll"
            >
                {#each themes as t}
                    <button
                        data-theme={t}
                        class="btn btn-sm bg-base-100 flex justify-between"
                        on:click={() => updateTheme(t)}
                    >
                        <span>{t}</span>

                        <div class="flex items-center gap-2">
                            {#each ["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"] as bg}
                                <span class="{bg} h-4 w-2 rounded-box"></span>
                            {/each}
                        </div>
                    </button>
                {/each}
            </div>
        </details>
    </div>
</nav>
