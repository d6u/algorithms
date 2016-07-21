/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i += 1) {
        // 1. Put positive nums[i] into nums[i] - 1 position
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i]-1] !== nums[i]) {
            const a = i;
            const b = nums[i] - 1;
            [nums[a], nums[b]] = [nums[b], nums[a]];
        }
    }

    // 2. The first nums[i] that's not equal to i + 1 is the missing number
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return nums.length + 1;
};

console.log(firstMissingPositive([1,2,1]))
