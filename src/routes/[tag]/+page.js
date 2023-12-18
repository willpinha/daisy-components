export const load = async ({ params }) => {
    const { tag } = params;

    /**
     * Ensures build will bundle all Svelte components inside examples folder
     */
    const allModules = import.meta.glob("../../lib/examples/*/*.svelte");

    /**
     * Filtered modules for tag 
     * 
     * @type {typeof allModules}
     */
    const tagModules = {};

    for (const path in allModules) {
        if (path.includes(`examples/${tag}`)) {
            tagModules[path] = allModules[path];
        }
    }

    const components = [];

    for (const path in tagModules) {
        /**
         * @type {any}
         */
        const module = await tagModules[path]();

        const component = module.default;

        components.push(component);
    }

    return { tag, components };
}
