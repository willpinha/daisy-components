import { writable } from "svelte/store";
import { browser } from "$app/environment";

let theme = "dark";

if (browser) {
    theme = localStorage.theme ?? theme;
}

export const darkThemes = [
    "dark",
    "synthwave",
    "halloween",
    "forest",
    "aqua",
    "black",
    "luxury",
    "dracula",
    "business",
    "night",
    "coffee",
    "dim",
    "sunset"
];

export const isDarker = writable(darkThemes.includes(theme));
