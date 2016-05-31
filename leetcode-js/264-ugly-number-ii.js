/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    'use strict';

    const queue = [1];
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;

    while (queue.length < n) {
        const m2 = queue[i2] * 2;
        const m3 = queue[i3] * 3;
        const m5 = queue[i5] * 5;
        const m = Math.min(m2, m3, m5);

        if (m === m2) {
            i2 += 1;
        }

        if (m === m3) {
            i3 += 1;
        }

        if (m === m5) {
            i5 += 1;
        }

        queue.push(m);
    }

    return queue[queue.length - 1];
};

console.log(nthUglyNumber(7));
