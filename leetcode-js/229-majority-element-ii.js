/**
 * @param  {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  'use strict';

  if (nums.length < 2) {
    return nums;
  }

  let c1 = 0;
  let c2 = 0;
  let n2;
  let n1;

  for (let n of nums) {
    if (n1 === n) {
      c1 += 1;
    } else if (n2 === n) {
      c2 += 1;
    } else if (c1 === 0) {
      n1 = n;
      c1 = 1;
    } else if (c2 === 0) {
      n2 = n;
      c2 = 1;
    } else {
      c1 -= 1;
      c2 -= 1;
    }
  }

  return [n1, n2].filter((n) => n != null && isValid(n, nums));
};

function isValid(n, nums) {
  return nums.reduce((c, num) => num === n ? c + 1 : c, 0) > nums.length / 3;
}

console.log(majorityElement([2,2]));
console.log(majorityElement([0,-1,2,-1]));
