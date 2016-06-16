/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const buckets = Array(nums.length+1);
    const frequencyMap = new Map();

    for (const n of nums) {
        const count = frequencyMap.get(n);
        frequencyMap.set(n, count ? count + 1 : 1);
    }

    for (const [key, frequency] of frequencyMap.entries()) {
        if (!buckets[frequency]) {
            buckets[frequency] = [key];
        } else {
            buckets[frequency].push(key);
        }
    }

    const result = [];

    for (let i = buckets.length - 1; i >= 0, result.length < k; i -= 1) {
        if (buckets[i]) {
            result.push(...buckets[i]);
        }
    }

    return result;
};
