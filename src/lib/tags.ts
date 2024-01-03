const modules = import.meta.glob("../../examples/**/*.html", { as: "raw" });

export type TagExample = {
    name: string,
    html: string,
}

export async function getTagExamples(tag: string): Promise<TagExample[]> {
    const tagPaths = Object.keys(modules).filter((path) => path.includes(`examples/${tag}`));

    const tagExamples: TagExample[] = [];

    for (const path of tagPaths) {
        const regex = new RegExp("\/([^\/]+)\.html$");
        const result = path.match(regex);

        const name = result ? result[1] : "Could not find example name...";
        const html = await modules[path]();

        tagExamples.push({ name, html });
    }
    
    return tagExamples;    
}

export async function getTagExample(tag: string, example: string): Promise<TagExample> {
    const examplePath = `../../examples/${tag}/${example}.html`;

    const html = await modules[examplePath]();

    return { name: example, html };
}
