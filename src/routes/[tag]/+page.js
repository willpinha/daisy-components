import examples from '$lib/examples/index.js';

export const load = async ({ params }) => {
    const { tag } = params;

    const components = [];

    for (const example of examples) {
        // const module = await import(`${importPath}/${name}`);

        const module = await example;

        /**
         * @type {import('svelte').ComponentType}
         */
        const componentClass = module.default;

        components.push(componentClass);
    }

    return { tag, components };
}