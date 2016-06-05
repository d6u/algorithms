/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const length = nums1.length + nums2.length;
    const mid = Math.floor(length / 2);

    if (!(length % 2)) {
        const n1 = kth(nums1, nums2, mid - 1);
        const n2 = kth(nums1, nums2, mid);
        return (n1 + n2) / 2;
    } else {
        return kth(nums1, nums2, mid);
    }
};

function kth(nums1, nums2, k) {
    if (!nums1.length) {
        return nums2[k];
    }

    if (!nums2.length) {
        return nums1[k];
    }

    const i1 = Math.floor(nums1.length / 2);
    const i2 = Math.floor(nums2.length / 2);

    const mid1 = nums1[i1];
    const mid2 = nums2[i2];

    if (mid1 < mid2) {
        if (k > i1 + i2) {
            return kth(nums1, nums2.slice(0, i2), k);
        } else {
            return kth(nums1.slice(i1 + 1), nums2, k - i1 - 1);
        }
    } else {
        if (k > i1 + i2) {
            return kth(nums1.slice(0, i1), nums2, k);
        } else {
            return kth(nums1, nums2.slice(i2 + 1), k - i2 - 1);
        }
    }
}
