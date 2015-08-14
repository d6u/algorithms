/**
 * @param  {number[]} nums
 * @param  {number}   target
 * @return {boolean}
 */
var search = function(nums, target) {
  var l = 0;
  var r = nums.length - 1;
  var m;

  while (l <= r) {
    m = (l + r) >> 1;
    if (nums[m] === target) return true;
    if (nums[l] < nums[m]) {
      if (nums[l] === target) return true;
      if (nums[l] < target && target < nums[m]) {
        r = m - 1;
      }
      else {
        l = m + 1;
      }
    }
    else if (nums[l] > nums[m]) {
      if (nums[r] === target) return true;
      if (nums[m] < target && target < nums[r]) {
        l = m + 1;
      }
      else {
        r = m - 1;
      }
    }
    else {
      l += 1;
    }
  }

  return false;
};

search([3, 1, 1], 3);
