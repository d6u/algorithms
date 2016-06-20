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
        return false;
    }

    const char = pattern[j];

    if (map.has(char)) {
        const s = map.get(char);

        if (!str.startsWith(s, i)) {
            return false;
        }

        return isMatch(str, i + s.length, pattern, j + 1, map, set);
    }

    for (let k = i; k < str.length; k += 1) {
        const p = str.substring(i, k + 1);

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
