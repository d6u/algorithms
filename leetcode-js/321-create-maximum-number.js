/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    let ans = [];
    for (let i = Math.max(0, k - nums2.length); i <= k && i <= nums1.length; i += 1) {
        const candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i), k);
        if (greater(candidate, 0, ans, 0)) {
            ans = candidate;
        }
    }
    return ans;
};

function merge(nums1, nums2, k) {
    const ans = [];
    for (let i = 0, j = 0, r = 0; r < k; r += 1) {
        if (greater(nums1, i, nums2, j)) {
            ans[r] = nums1[i];
            i += 1;
        } else {
            ans[r] = nums2[j];
            j += 1;
        }
    }
    return ans;
}

function greater(nums1, i, nums2, j) {
    while (i < nums1.length && j < nums2.length && nums1[i] === nums2[j]) {
        i += 1;
        j += 1;
    }
    return j === nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
}

function maxArray(nums, k) {
    const ans = [];
    for (let i = 0, j = 0; i < nums.length; i += 1) {
        while (nums.length - i + j > k && j > 0 && ans[j-1] < nums[i]) {
            j -= 1;
        }
        if (j < k) {
            ans[j] = nums[i];
            j += 1;
        }
    }
    return ans;
}
