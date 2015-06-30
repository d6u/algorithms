'use strict';

function singleNumberII(nums) {
  var n1 = 0;
  var n2 = 0;
  var n3 = 0;

  for (var i = 0; i < nums.length; i++) {
    n2 |= n1 & nums[i];
    n1 ^= nums[i];
    n3 = n1 & n2;
    n1 ^= n3;
    n2 ^= n3;
  }

  return n1;
}
