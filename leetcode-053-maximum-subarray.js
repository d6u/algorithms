'use strict';

function maxSubArray(nums) {
  var sum = nums[0];
  var max = nums[0];
  for (var i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], nums[i] + sum);
    max = Math.max(sum, max);
  }
  return max;
}
