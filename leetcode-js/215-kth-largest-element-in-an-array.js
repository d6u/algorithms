/**
 * @param  {number[]} nums
 * @param  {number}   k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  var pivot = nums[Math.random() * nums.length | 0];
  var nums1 = [];
  var nums2 = [];
  var n;

  for (n of nums) {
    if (n > pivot) {
      nums1.push(n);
    } else if (n < pivot) {
      nums2.push(n);
    }
  }

  if (k <= nums1.length) {
    return findKthLargest(nums1, k);
  }

  if (k > nums.length - nums2.length) {
    return findKthLargest(nums2, k - (nums.length - nums2.length));
  }

  return pivot;
};
