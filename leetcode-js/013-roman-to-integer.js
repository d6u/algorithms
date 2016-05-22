var map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    'use strict';

    let x = 0;
    let current;
    let last;

    for (let i = s.length - 1; i >= 0; i -= 1) {
        current = map[s[i]];
        if (last && current < last) {
            x -= current;
        } else {
            x += current;
        }
        last = current;
    }

    return x;
};
