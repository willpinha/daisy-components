import { readdir } from 'fs/promises'

export const load = async ({ params }) => {
    const tags = (await readdir("./src/lib/examples", { withFileTypes: true }))
        .filter(dir => dir.isDirectory())
        .map(dir => dir.name);

    return { tags };
}
