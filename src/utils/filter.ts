import aliases from "./aliases";

// Format tag and filter before comparison 
function format(name: string) {
    return name.toLowerCase().replace(/\s+/g, ""); // Case and whitespace insensitive
}

export function isMatch(tag: string, filter: string): boolean {
    filter = format(filter)

    const targets = [tag]

    if (tag in aliases) {
        targets.push(...aliases[tag]);
    }

    for (let target of targets) {
        target = format(target);

        if (target.startsWith(filter)) {
            return true;
        }
    }

    return false;
}
