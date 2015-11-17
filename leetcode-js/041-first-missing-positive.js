/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    'use strict';

    let i = 0;
    let n = nums.length;

    while (i < n) {
        if (nums[i] !== i+1 &&
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[i] !== nums[nums[i]-1])
        {
            let a = i;
            let b = nums[i]-1;
            let tmp = nums[a];
            nums[a] = nums[b];
            nums[b] = tmp;
        } else {
            i += 1;
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i+1) {
            return i+1;
        }
    }
    return n+1;
};

console.log(firstMissingPositive([2,1]));
