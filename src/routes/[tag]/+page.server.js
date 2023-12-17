import { readdir } from 'fs/promises'

export const load = async ({ params }) => {
    const { tag } = params;
    const componentsPath = `./src/lib/examples/${tag}/`;

    const componentNames = (await readdir(componentsPath, { withFileTypes: true }))
        .filter(file => file.isFile())
        .map(file => file.name);

    return { tag, componentNames };
}
