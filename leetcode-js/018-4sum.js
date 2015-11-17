/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    'use strict';

    const allSol = [];
    nums.sort((a, b) => a - b);
    kSum(nums, 0, nums.length - 1, target, 4, [], allSol);
    return allSol;
};

function kSum(nums, start, end, target, k, sol, allSol) {
    'use strict';

    if (k <= 0) {
        return;
    }

    if (k === 1) {
        for (let i = start; i <= end; i++) {
            if (nums[i] === target) {
                sol.push(target);
                allSol.push(sol.slice(0));
                sol.pop();
                return;
            }
        }
    }

    if (k === 2) {
        twoSum(nums, start, end, target, sol, allSol);
        return;
    }

    for (let i = start; i <= end - k + 1; i++) {
        if (i > start && nums[i] === nums[i-1]) {
            continue;
        }
        sol.push(nums[i]);
        kSum(nums, i+1, end, target - nums[i], k - 1, sol, allSol);
        sol.pop();
    }
}

function twoSum(nums, start, end, target, sol, allSol) {
    'use strict';

    while (start < end) {
        let sum = nums[start] + nums[end];
        if (sum === target) {
            sol.push(nums[start]);
            sol.push(nums[end]);
            allSol.push(sol.slice(0));
            sol.pop();
            sol.pop();
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
