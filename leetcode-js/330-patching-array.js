/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let miss = 1;
    let added = 0;
    let i = 0;
    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i += 1;
        } else {
            miss += miss;
            added += 1;
        }
    }
    return added;
};
