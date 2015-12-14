const aCharCode = 'a'.charCodeAt(0)

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

    let len = s1.length;
    let count = makeArray(26, 0);

    for (let i = 0; i < len; i++) {
        count[s1[i].charCodeAt(0) - aCharCode]++;
        count[s2[i].charCodeAt(0) - aCharCode]--;
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

function makeArray(size, filler) {
    'use strict';
    const arr = Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = typeof filler === 'function' ? filler() : filler;
    }
    return arr;
}

isScramble('ab', 'ba');
