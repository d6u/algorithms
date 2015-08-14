/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  var result = [[]];
  var last = [[]];
  var cur;
  var i;
  var j;
  var c;
  for (i = 0; i < nums.length; i++) {
    cur = [];
    for (j = 0; j < last.length; j++) {
      if (i > 0 && nums[i] === nums[i-1] && j < c) continue;
      cur.push(last[j].concat([nums[i]]));
    }
    c = result.length;
    result = result.concat(cur);
    last = result.slice();
  }
  return result;
};
