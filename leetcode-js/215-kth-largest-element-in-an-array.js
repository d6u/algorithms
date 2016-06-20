/**
 * @param  {number[]} nums
 * @param  {number}   k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const pivot = nums[Math.floor(Math.random() * nums.length)];
    const nums1 = [];
    const nums2 = [];

    for (const n of nums) {
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
