/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var p1 = 0;
  var p2 = nums.length - 1;
  var m;

  if (nums[p1] < nums[p2]) {
    return nums[p1];
  }

  while (1) {
    if (p1 === p2) return nums[p1];
    if (p2 - p1 === 1) return Math.min(nums[p1], nums[p2]);
    m = (p1 + p2) / 2 | 0;
    if (nums[p1] > nums[m]) {
      p2 = m;
    }
    else {
      p1 = m;
    }
  }
};
