const PAIRS = {
    A: 0,
    C: 1,
    G: 2,
    T: 3,
};

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    'use strict';

    const result = [];
    const map = new Map();
    let h = 0;

    for (let i = 0; i < s.length; i += 1) {
        h = (h << 2) | PAIRS[s[i]];
        if (i >= 9) {
            h &= (1 << 20) - 1;
            const count = map.get(h);
            if (count == null) {
                map.set(h, 1);
            } else if (count === 1) {
                result.push(s.substr(i-9, 10));
                map.set(h, 2);
            }
        }
    }

    return result;
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAA"));
