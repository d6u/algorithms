/**
 * @param  {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var n = nums.length;
  return n * (n + 1) / 2 - nums.reduce((sum, x) => sum + x);
};
