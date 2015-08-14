/**
 * @param  {number[]} nums
 * @param  {number}   target
 * @return {number}
 */
var search = function(nums, target) {
  var p1 = 0;
  var p2 = nums.length - 1;
  var m;

  while (p1 <= p2) {
    m = (p1 + p2) >> 1;
    if (nums[m] === target) return m;

    if (nums[m] > nums[p1]) {
      if (nums[p1] === target) return p1;
      if (nums[p1] < target && target < nums[m]) {
        p2 = m - 1;
      } else {
        p1 = m + 1;
      }
    }
    else {
      if (nums[p2] === target) return p2;
      if (nums[m] < target && target < nums[p2]) {
        p1 = m + 1;
      } else {
        p2 = m - 1;
      }
    }
  }

  return -1;
};
