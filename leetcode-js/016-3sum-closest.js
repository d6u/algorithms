/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    'use strict';

    nums.sort((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let diff = nums[i] + nums[left] + nums[right] - target;
            if (Math.abs(diff) < Math.abs(minDiff)) {
                minDiff = diff;
            }
            if (diff === 0) {
                break;
            } else if (diff < 0) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return target + minDiff;
};
