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

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const key = Math.floor(n / Math.max(1, t));

        for (const m of [key, key - 1, key + 1]) {
            if (map.has(m) && Math.abs(n - map.get(m)) <= t) {
                return true;
            }
        }

        map.set(key, n);

        if (i >= k) {
            removeFirst(map);
        }
    }

    return false;
};

function removeFirst(map) {
    const first = map.keys().next().value;
    map.delete(first);
}

console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 0));
