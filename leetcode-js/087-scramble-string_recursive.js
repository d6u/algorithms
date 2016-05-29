const A_CHAR_CODE = 'a'.charCodeAt(0)

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    'use strict';

    if (s1 === s2) {
        return true;
    }

    const len = s1.length;
    let count = Array(26).fill(0);

    for (let i = 0; i < len; i++) {
        count[s1[i].charCodeAt(0) - A_CHAR_CODE]++;
        count[s2[i].charCodeAt(0) - A_CHAR_CODE]--;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            return false;
        }
    }

    for (let i = 1; i < len; i++) {
        if (isScramble(s1.substr(0, i), s2.substr(0, i)) &&
            isScramble(s1.substr(i), s2.substr(i))) {

            return true;
        }

        if (isScramble(s1.substr(0, i), s2.substr(len - i)) &&
            isScramble(s1.substr(i), s2.substr(0, len - i))) {

            return true;
        }
    }

    return false;
};

isScramble('ab', 'ba');
