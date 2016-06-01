/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    'use strict';

    const map = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        const n = nums[i];
        const index = map.get(n);
        if (index == null) {
            map.set(target - n, i);
        } else {
            return [index, i];
        }
    }
};

console.log(twoSum([3,2,4], 6));
