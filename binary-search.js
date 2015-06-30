'use strict';

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
    let m = (p1 + p2) / 2 | 0;
    if (arr[m] === target) {
      return m;
    }
    else if (target < arr[m]) {
      p2 = m - 1;
    }
    else {
      p1 = m + 1;
    }
  }
  return -1;
}

let r = binarySearch([1,2,4,5,6], 6);

console.log(r);
