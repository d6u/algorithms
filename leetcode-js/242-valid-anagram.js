/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    'use strict';

    if (s.length !== t.length) {
        return false;
    }

    let countsS = countChar(s);
    let countsT = countChar(t);

    for (let pair of countsS.entries()) {
        let char = pair[0];
        let count = pair[1];
        if (countsT.get(char) !== count) {
            return false;
        }
    }

    return true;
};

function countChar(str) {
    'use strict';

    let counts = new Map();

    for (let char of str) {
        let count = counts.get(char);
        counts.set(char, count == null ? 1 : count + 1);
    }

    return counts;
}
