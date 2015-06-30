'use strict';

/**
 * @param  {number[]} nums
 * @param  {number}   target
 * @return {number}
 */
function searchInsert(nums, target) {
  var p1 = 0;
  var p2 = nums.length - 1;

  while (p1 <= p2) {
    var m = (p1 + p2) / 2 | 0;
    if (nums[m] === target) {
      return m;
    } else if (target < nums[m]) {
      p2 = m - 1;
    } else {
      p1 = m + 1;
    }
  }

  return p1;
}

var r = searchInsert([1], 0);

console.log(r);
