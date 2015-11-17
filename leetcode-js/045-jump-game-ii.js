/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    'use strict';

    let n = nums.length;
    let curMax = 0;
    let nJumps = 0;
    let i = 0;

    while (curMax < n - 1) {
        let lastMax = curMax;
        for (; i <= lastMax; i++) {
            curMax = Math.max(curMax, i+nums[i]);
        }
        nJumps += 1;
        if (lastMax === curMax) {
            return -1;
        }
    }

    return nJumps;
};
