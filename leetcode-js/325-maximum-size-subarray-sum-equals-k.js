/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    const sums = [0];

    for (let i = 0; i < nums.length; i++) {
        sums[i + 1] = sums[i] + nums[i];
    }

    const map = new Map();
    let max = 0;

    for (let i = 0; i < sums.length; i++) {
        if (map.has(sums[i] - k)) {
            max = Math.max(max, i - map.get(sums[i] - k));
        }
        if (!map.has(sums[i])) {
            map.set(sums[i], i);
        }
    }

    return max;
};
