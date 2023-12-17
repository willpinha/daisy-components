import { readdir } from 'fs/promises'

export const load = async ({ params }) => {
    const rootPath = "./src/lib/examples/";

    const tags = (await readdir(rootPath, { withFileTypes: true }))
        .filter(dir => dir.isDirectory())
        .map(dir => dir.name);

    let numExamples = 0;

    for (const tag of tags) {
        numExamples += (await readdir(rootPath + tag)).length;
    }

    return { tags, numExamples };
}
