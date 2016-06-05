/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }

    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i += 1) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        const target = 0 - nums[i];

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                result.push([nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;
                while (nums[left] === nums[left-1]) {
                    left += 1;
                }
                while (nums[right] === nums[right+1]) {
                    right -= 1;
                }
            } else if (nums[left] + nums[right] < target) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return result;
};
