/**
 * @param  {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  'use strict';

  if (nums.length < 2) {
    return nums;
  }

  let n1;
  let n2;
  let c1 = 0;
  let c2 = 0;

  for (let i = 0; i < nums.length; i += 1) {
    let n = nums[i];

    if (n1 === n) {
      c1 += 1;
      continue;
    }
    if (n2 === n) {
      c2 += 1;
      continue;
    }
    if (c1 === 0) {
      n1 = nums[i];
      c1 = 1;
      continue;
    }
    if (c2 === 0) {
      n2 = nums[i];
      c2 = 1;
      continue;
    }

    c1 -= 1;
    c2 -= 1;
  }

  return [n1, n2].filter(function (n) {
    return n != null && isValid(n, nums);
  });
};

function isValid(n, nums) {
  'use strict';

  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (n === nums[i]) {
      c += 1;
    }
  }
  return c > nums.length / 3;
}

console.log(majorityElement([0,-1,2,-1]));
