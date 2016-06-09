/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 1) {
        return [`${nums[0]}`];
    }

    const result = [];

    for (let i = 0; i < nums.length; i += 1) {
        const n = nums[i];
        while (i + 1 < nums.length && nums[i+1] - nums[i] === 1) {
            i += 1;
        }

        if (nums[i] !== n) {
            result.push(`${n}->${nums[i]}`);
        } else {
            result.push(`${n}`);
        }
    }

    return result;
};
