import { readable } from "svelte/store";

function buildMetadata() {
    const metadata = {};

    const modules = import.meta.glob("../examples/*/*.svelte");

    for (const path in modules) {
        // For paths like "../examples/folder/filename.svelte"
        const [examples, folder, filename] = path.slice(3).replace(".svelte", "").split("/");

        if (!metadata[folder]) {
            metadata[folder] = [filename];
        } else {
            metadata[folder].push(filename);
        }
    }

    return readable(metadata);
}

/**
 * Each key (tag) is a directory at /lib/examples/ and each value is an array of Svelte
 * component names of that directory
 */
export const metadata = buildMetadata();

import { persisted } from 'svelte-persisted-store'

// Set default theme to dark
export const theme = persisted("theme", "dark");
