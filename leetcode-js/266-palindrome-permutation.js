/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const map = new Map();

    for (const char of s) {
        const count = map.get(char);
        if (count == null) {
            map.set(char, 1);
        } else {
            map.set(char, count + 1);
        }
    }

    let allowSingle = s.length % 2 === 0 ? false : true;

    for (const count of map.values()) {
        if (count % 2 !== 0) {
            if (allowSingle) {
                allowSingle = false;
            } else {
                return false;
            }
        }
    }

    return true;
};
