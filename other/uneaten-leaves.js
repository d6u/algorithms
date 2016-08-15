'use strict';

/**
 * @param  {Number}   n   Number of leaves
 * @param  {Number[]} arr Jumps of caterpillar
 * @return {Number}       Number of uneaten leaves
 */
function uneatenLeaves(n, arr) {
  var count = 0;

  var sets = subsets(arr).sort(function (a, b) {
    return a.length - b.length;
  });

  var nums;
  var lcm;
  var i;
  var j;
  var tmp;
  var sum = 0;
  var sign = 1;

  for (i = 0; i < arr.length; i++) {
    tmp = 0;
    while (sets[0] && sets[0].length === i + 1) {
      nums = sets.shift();
      lcm = 1;
      for (j = 0; j < nums.length; j++) {
        lcm = findLcm(lcm, nums[j]);
      }
      tmp += n / lcm | 0;
    }

    sum += sign * tmp;
    sign *= -1;
  }

  return n - sum;
};

function findLcm(a, b) {
  return a * (b / findGcd(a, b));
}

function findGcd(a, b) {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
}

function subsets(nums) {
  var arr = [[]];
  var i;
  var j;
  var tmp;

  for (i = 0; i < nums.length; i++) {
    tmp = [];
    for (j = 0; j < arr.length; j++) {
      tmp.push(arr[j].concat([nums[i]]));
    }
    arr = arr.concat(tmp);
  }

  return arr.slice(1);
};

console.log(uneatenLeaves(10, [2,4,5])); // => 4
