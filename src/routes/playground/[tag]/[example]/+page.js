export const load = async ({ params }) => {
    const { tag, example } = params;

    return { tag, example };
}
