'use strict';

const assert = require('assert');

function firstNumberBiggerThanTarget(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (left > nums.length - 1) {
    return 0;
  } else {
    return left;
  }
}

assert(firstNumberBiggerThanTarget([1,2,3,4,5,5], 0) === 0);
assert(firstNumberBiggerThanTarget([1,2,3,4,5,5], 1) === 1);
assert(firstNumberBiggerThanTarget([1,2,3,4,5,5], 2) === 2);
assert(firstNumberBiggerThanTarget([1,2,3,4,5,5], 3) === 3);
assert(firstNumberBiggerThanTarget([1,2,3,4,5,5], 4) === 4);
assert(firstNumberBiggerThanTarget([1,2,3,4,5,5], 5) === 0);
assert(firstNumberBiggerThanTarget([1,2,3,4,5,5], 6) === 0);
