/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const result = [];

    let pre = lower - 1;

    for (let i = 0; i <= nums.length; i += 1) {
        const after = i === nums.length ? upper + 1 : nums[i];
        if (pre + 2 === after) {
            result.push(`${pre + 1}`);
        } else if (pre + 2 < after) {
            result.push(`${pre + 1}->${after - 1}`);
        }
        pre = after;
    }

    return result;
};
