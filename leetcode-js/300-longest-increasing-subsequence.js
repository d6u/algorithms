/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    'use strict';

    if (!nums.length) {
        return 0;
    }

    const dp = [nums[0]];

    for (const n of nums.slice(1)) {
        if (dp[dp.length - 1] < n) {
            dp.push(n);
        } else {
            for (let i = 0; i < dp.length; i += 1) {
                if (dp[i] >= n) {
                    dp.splice(i, 1, n);
                    break;
                }
            }
        }
    }

    return dp.length;
};

console.log(lengthOfLIS([3,5,6,2,5,4,19,5,6,7,12]));
