import { writable } from "svelte/store";

/**
 * Each key is a directory at /lib/examples/ and each value is an array of imported Svelte
 * components of that directory 
 */
export const allComponents = writable({});

// A tag is nothing but a directory name at /lib/examples/
export const selectedTag = writable("");
