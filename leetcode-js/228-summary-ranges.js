/**
 * @param  {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums || !nums.length) {
    return [];
  }

  if (nums.length === 1) {
    return [String(nums[0])];
  }

  var r = [];
  var pre = nums[0];
  var head = pre;
  var i;
  var n;

  for (i = 1; i < nums.length; i++) {
    n = nums[i];

    if (n === pre + 1) {
      pre = n;

      if (i === nums.length - 1) {
        r.push(head + '->' + n);
      }

    } else {
      if (head === pre) {
        r.push(String(head));
      } else {
        r.push(head + '->' + pre);
      }

      if (i === nums.length - 1) {
        r.push(String(n));
      }

      pre = n;
      head = pre;
    }
  }

  return r;
};
