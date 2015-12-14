/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    'use strict';

    const n = s.length;

    if (n === 0) {
        return 0;
    }

    let memo = makeArray(n+1, 0);
    memo[n] = 1;
    memo[n-1] = s.charAt(n-1) !== '0' ? 1 : 0;

    for (let i = n - 2; i >= 0; i--) {
        if (s.charAt(i) === '0') {
            continue;
        }

        memo[i] =
            parseInt(s.substring(i, i+2)) <= 26 ?
                memo[i+1] + memo[i+2] :
                memo[i+1];
    }

    return memo[0];
};

function makeArray(size, filler) {
    'use strict';
    const arr = Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = typeof filler === 'function' ? filler() : filler;
    }
    return arr;
}
