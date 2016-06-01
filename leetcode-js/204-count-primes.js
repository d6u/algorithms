/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    'use strict';

    if (n <= 2) {
        return 0;
    }

    const nums = Array(n).fill(true);

    nums[0] = false;
    nums[1] = false;

    const stop = Math.sqrt(n);

    for (let i = 2; i < stop; i += 1) {
        if (nums[i]) {
            for (let j = i * i; j < n; j += i) {
                nums[j] = false;
            }
        }
    }

    return nums.filter((isPrime) => isPrime).length;
};
