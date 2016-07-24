/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, str) {
    return isMatch(str, 0, pattern, 0, new Map(), new Set());
};

function isMatch(str, i, pattern, j, map, set) {
    if (i === str.length && j === pattern.length) {
        return true;
    } else if (i === str.length || j === pattern.length) {
        // If one reaches the end, the other didn't
        return false;
    }

    const char = pattern[j];

    // `map` stores a map of char in pattern to substring of str
    if (map.has(char)) {
        const s = map.get(char);

        // Test whether substring exists in str at i
        if (!str.startsWith(s, i)) {
            return false;
        }

        return isMatch(str, i + s.length, pattern, j + 1, map, set);
    }

    for (let k = i; k < str.length; k += 1) {
        // Test substrings of str, start from shorter
        const p = str.substring(i, k + 1);

        // The substring has been tested
        if (set.has(p)) {
            continue;
        }

        map.set(char, p);
        set.add(p);

        if (isMatch(str, k + 1, pattern, j + 1, map, set)) {
            return true;
        }

        set.delete(p);
        map.delete(char);
    }

    return false;
}

console.log(wordPatternMatch("itwasthebestoftimes", "ittwaastthhebesttoofttimes"))
