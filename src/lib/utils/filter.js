export function isMatch(tag, filter) {
    tag = tag.toLowerCase();
    filter = filter.replace(/\s+/g, "").toLowerCase();

    return tag.startsWith(filter);
}
