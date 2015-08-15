/**
 * @param  {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0;
  var p1 = 0;
  var p2 = nums.length - 1;
  var m;

  while (p1 < p2) {
    m = (p1 + p2) >> 1;
    if (nums[m] < nums[m+1]) {
      p1 = m + 1;
    } else {
      p2 = m;
    }
  }

  return p1;
};
