/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    'use strict';

    const s = new Set();

    s.add(n);

    while (n !== 1) {
        n = sum(n);
        if (s.has(n)) {
            return false;
        } else {
            s.add(n);
        }
    }

    return true;
};

function sum(n) {
    'use strict';

    let result = 0;

    while (n) {
        const tmp = n % 10;
        result += tmp * tmp;
        n = Math.floor(n / 10);
    }

    return result;
}
