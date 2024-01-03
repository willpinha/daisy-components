type Collection = {
    [tag: string]: {
        [example: string]: string
    }
};

async function buildCollection(): Promise<Collection> {
    const modules = import.meta.glob("../examples/**/*.html", { as: "raw" });

    const collection: Collection = {};

    for (const path in modules) {
        const regex = /\/([^/]+)\/([^/]+)\.html$/;
        const match = path.match(regex);

        let tagName: string;
        let exampleName: string;

        if (match) {
            tagName = match[1];
            exampleName = match[2];
        } else {
            tagName = "";
            exampleName = "";
        }

        const html = await modules[path]();

        collection[tagName] = collection[tagName] ?? {};
        collection[tagName][exampleName] = html;
    }

    return collection;
}

export function getNumberOfExamples(): number {
    let numExamples = 0;

    for (const tag in collection) {
        const examples = Object.keys(collection[tag]);

        numExamples += examples.length;
    }

    return numExamples; 
}

export function getTags(): string[] {
    return Object.keys(collection);
}

export const collection = await buildCollection();
