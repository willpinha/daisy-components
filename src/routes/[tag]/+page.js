export const load = async ({ data }) => {
    const { tag, componentNames } = data;

    const importPath = `../../lib/examples/${tag}`;
    const components = [];

    for (const name of componentNames) {
        const module = await import(/* @vite-ignore */ `${importPath}/${name}`);

        /**
         * @type {import('svelte').ComponentType}
         */
        const componentClass = module.default;

        components.push(componentClass);
    }

    return { tag, components };
}
