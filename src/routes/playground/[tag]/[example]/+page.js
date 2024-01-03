export const load = async ({ params }) => {
    let { tag, example } = params;

    return { tag, example };
}
