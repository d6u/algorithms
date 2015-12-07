'use strict';

var assert = require('assert');

/**
 * Search in a sorted (ASC) array
 * @param  {Array}  arr
 * @param  {number} target
 * @return {number} Index of matched element, or -1 for not found
 */
function binarySearch(arr, target) {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 <= p2) {
    const m = Math.floor((p1 + p2) / 2);

    if (arr[m] === target) {
      return m;
    }

    if (target < arr[m]) {
      p2 = m - 1;
    } else {
      p1 = m + 1;
    }
  }

  return -1;
}

assert(binarySearch([1, 2], 1) === 0);
assert(binarySearch([1, 2, 3, 4], 1) === 0);
assert(binarySearch([1, 2, 3, 4], 2) === 1);
assert(binarySearch([1, 2, 3, 4], 3) === 2);
assert(binarySearch([1, 2, 3, 4], 4) === 3);
assert(binarySearch([1, 2, 3, 4], 5) === -1);
assert(binarySearch([1, 2, 3], 1) === 0);
assert(binarySearch([1, 2, 3], 2) === 1);
assert(binarySearch([1, 2, 3], 3) === 2);
assert(binarySearch([1, 2, 3], 0) === -1);
