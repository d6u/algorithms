/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map1 = countChars(s);
    const map2 = countChars(t);

    for (const [char, count] of map1.entries()) {
        if (map2.get(char) !== count) {
            return false;
        }
    }

    return true;
};

function countChars(str) {
    const map = new Map();

    for (const c of str) {
        const count = map.get(c);
        if (count == null) {
            map.set(c, 1);
        } else {
            map.set(c, count + 1);
        }
    }

    return map;
}
