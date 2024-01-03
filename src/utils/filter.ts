export function isMatch(tag: string, filter: string): boolean {
    tag = tag.toLowerCase();
    filter = filter.replace(/\s+/g, "").toLowerCase(); // Case and whitespace insensitive

    return tag.startsWith(filter);
}
