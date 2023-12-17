/**
 * Algorithm for filtering tags  
 * 
 * @param {string} tag
 * @param {string} filter
 * 
 * @returns boolean
 */
export function isMatch(tag, filter) {
    tag = tag.toLowerCase();
    filter = filter.replace(/\s+/g, "").toLowerCase(); // Case and whitespace insensitive

    return tag.startsWith(filter);
}
