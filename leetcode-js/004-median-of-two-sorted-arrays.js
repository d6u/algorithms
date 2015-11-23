const floor = Math.floor;
const min = Math.min;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const l = nums1.length + nums2.length;
    const mid = floor(l / 2);

    if (l % 2) { // Odd total length
        return kth(nums1, nums2, mid);
    } else {
        const m1 = kth(nums1, nums2, mid - 1);
        const m2 = kth(nums1, nums2, mid);
        return (m1 + m2) / 2;
    }
};

// k is zero based index
function kth(nums1, nums2, k) {
    if (!nums1.length) return nums2[k];
    if (!nums2.length) return nums1[k];

    const i1 = floor(nums1.length / 2);
    const i2 = floor(nums2.length / 2);
    const e1 = nums1[i1];
    const e2 = nums2[i2];

    if (e1 > e2) {
        if (k > i1 + i2) {
            return kth(nums1, nums2.slice(i2+1), k - i2 - 1);
        } else {
            return kth(nums1.slice(0, i1), nums2, k);
        }
    } else {
        if (k > i1 + i2) {
            return kth(nums1.slice(i1+1), nums2, k - i1 - 1);
        } else {
            return kth(nums1, nums2.slice(0, i2), k);
        }
    }
}

console.log(findMedianSortedArrays([1, 4], [2, 3]));
