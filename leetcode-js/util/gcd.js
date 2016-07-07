'use strict';

module.exports = function gcd(a, b) {
    while (b !== 0) {
        const tmp = b;
        b = a % b;
        a = tmp;
    }
    return a;
};
