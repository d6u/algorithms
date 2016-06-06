/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();

    for (const n of nums1) {
        const count = map.get(n);
        if (count == null) {
            map.set(n, 1);
        } else {
            map.set(n, count + 1);
        }
    }

    const result = [];

    for (const n of nums2) {
        const count = map.get(n);
        if (count != null && count - 1 >= 0) {
            result.push(n);
            map.set(n, count - 1);
        }
    }

    return result;
};
