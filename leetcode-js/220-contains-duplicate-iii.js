/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (k < 1 || t < 0) {
        return false;
    }

    const buckets = new Map();
    const size = t + 1;
    const shift = Math.pow(2, 31);

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i] + shift;
        const bucket = Math.floor(n / size);

        if (buckets.has(bucket)
            || (buckets.has(bucket - 1) && n - buckets.get(bucket - 1) <= t)
            || (buckets.has(bucket + 1) && buckets.get(bucket + 1) - n <= t)) {
            return true;
        }

        if (i >= k) {
            removeFirst(buckets);
        }

        buckets.set(bucket, n);
    }

    return false;
};

function removeFirst(map) {
    const k = map.keys().next().value;
    map.delete(k);
}

// console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 0));
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 0));
