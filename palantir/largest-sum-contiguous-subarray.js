'use strict';

function largestSumContiguousSubarray(nums) {
    var max = nums[0];
    var currMax = nums[0];

    for (var i = 1; i < nums.length; i += 1) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        max = Math.max(max, currMax);
    }

    return max;
}

console.log(largestSumContiguousSubarray([-2, -3, 4, -1, -2, 1, 5, -3]))
