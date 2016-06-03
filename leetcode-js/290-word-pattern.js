/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const words = str.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    const map1 = new Map();
    const map2 = new Map();

    for (const [i, char] of pattern.split('').entries()) {
        if (map1.get(char) !== map2.get(words[i])) {
            return false;
        }
        map1.set(char, i);
        map2.set(words[i], i);
    }

    return true;
};
