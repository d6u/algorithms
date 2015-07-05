/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  'use strict';

  let nums = [];

  for (let i = 1; i <= n; i++) {
    nums[i-1] = i;
  }

  let arr = [];
  let count = 0;

  while (arr.length < n) {
    let curCount = count;
    for (let i = 0; i < nums.length; i++) {
      let sum = curCount + sFact(n - arr.length - 1);
      if (sum >= k) {
        arr.push(nums[i]);
        count = curCount;
        let index = nums.indexOf(nums[i]);
        nums.splice(index, 1);
        break;
      }
      else {
        curCount = sum;
      }
    }
  }

  return arr.join('');
};

function sFact(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) {
    rval = rval * i;
  }
  return rval;
}
