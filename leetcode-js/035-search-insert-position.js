'use strict';

/**
 * @param {number[]} nums
 * @param {number}   target
 *
 * @return {number}
 */
function searchInsert(nums, target) {
  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 <= p2) {
    const m = Math.floor((p1 + p2) / 2);

    if (nums[m] === target) {
      return m;
    }

    if (target < nums[m]) {
      p2 = m - 1;
    } else {
      p1 = m + 1;
    }
  }

  return p1;
}
