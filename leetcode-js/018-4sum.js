/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    'use strict';

    nums.sort((a, b) => a - b);
    const result = [];
    kSum(nums, 0, nums.length - 1, target, 4, [], result);
    return result;
};

function kSum(nums, start, end, target, k, solution, result) {
    'use strict';

    switch (k) {
    case 0:
        return;
    case 1:
        oneSum(nums, start, end, target, solution, result);
        return;
    case 2:
        twoSum(nums, start, end, target, solution, result);
        return;
    default:
        for (let i = start; i <= end - k + 1; i += 1) {
            if (i > start && nums[i] === nums[i-1]) {
                continue;
            }
            kSum(nums, i + 1, end, target - nums[i], k - 1, solution.concat(nums[i]), result);
        }
    }
}

function oneSum(nums, start, end, target, solution, result) {
    'use strict';

    for (const n of nums.slice(start, end + 1)) {
        if (n === target) {
            result.push(solution.concat(n));
        }
    }
}

function twoSum(nums, start, end, target, solution, result) {
    'use strict';

    while (start < end) {
        const sum = nums[start] + nums[end];
        if (sum === target) {
            result.push(solution.concat(nums[start], nums[end]));
            start += 1;
            end -= 1;
            while (nums[start] === nums[start-1]) {
                start += 1;
            }
            while (nums[end] === nums[end+1]) {
                end -= 1;
            }
        } else if (sum < target) {
            start += 1;
        } else {
            end -= 1;
        }
    }
}

console.log(fourSum([0, 0, 0, 0], 0));
