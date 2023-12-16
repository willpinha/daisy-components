<script>
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
</script>

<nav class="navbar bg-base-300 justify-between">
    <div class="flex gap-2">
        <img src={logo} class="w-12" alt="Daisy Catalog" />

        <div class="flex font-bold text-2xl">
            Daisy
            <span class="text-primary">Catalog</span>
        </div>
    </div>

    <div class="flex gap-2">
        <a
            href="https://github.com/willpinha/daisy-catalog"
            class="btn btn-ghost"
        >
            <i class="fa-brands fa-github text-lg"></i>
            GitHub
        </a>

        <div class="dropdown dropdown-bottom dropdown-end">
            <button class="btn btn-ghost">
                Themes

                <i class="fa-solid fa-angle-down"></i>
            </button>

            <ul
                class="flex flex-col dropdown-content gap-2 mt-2 z-[1] p-4 shadow-2xl bg-base-200 rounded-box w-64 h-72 overflow-y-scroll"
            >
                {#each themes as theme}
                    <button
                        data-set-theme={theme}
                        data-theme={theme}
                        class="btn btn-sm bg-base-100 flex justify-between"
                    >
                        <span>{theme}</span>

                        <div class="flex items-center gap-2">
                            {#each ["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"] as bg}
                                <span class="{bg} h-4 w-2 rounded-box"></span>
                            {/each}
                        </div>
                    </button>
                {/each}
            </ul>
        </div>
    </div>
</nav>
