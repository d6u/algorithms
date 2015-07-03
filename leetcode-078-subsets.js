/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  nums.sort((a, b) => a - b);
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
  return arr;
};
