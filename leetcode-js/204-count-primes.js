/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    'use strict';

    if (n <= 2) {
        return 0;
    }

    let arr = makeArray(n, true);
    arr[0] = false;
    arr[1] = false;

    const stop = Math.sqrt(n);

    for (let i = 2; i < stop; i++) {
        if (arr[i]) {
            for (let j = i * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }

    return arr.reduce((count, el) => el ? count + 1 : count, 0);
};

function makeArray(size, filler) {
    'use strict';
    let arr = Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = typeof filler === 'function' ? filler() : filler;
    }
    return arr;
}
