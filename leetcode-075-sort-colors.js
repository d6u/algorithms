/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var pr = 0;
  var pb = nums.length - 1;
  var i = 0;
  var t;

  while (i <= pb) {
    if (nums[i] === 0) {
      t = nums[pr];
      nums[pr] = nums[i];
      nums[i] = t;
      pr += 1;
      i += 1;
    }
    else if (nums[i] === 2) {
      t = nums[pb];
      nums[pb] = nums[i];
      nums[i] = t;
      pb -= 1;
    }
    else {
      i += 1;
    }
  }
};
