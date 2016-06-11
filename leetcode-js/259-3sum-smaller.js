/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    if (nums.length < 3) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < nums.length - 2; i += 1) {
        if (nums[i] + nums[i+1] + nums[i+2] >= target) {
            break;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            while (k > j && nums[i] + nums[j] + nums[k] >= target) {
                k -= 1;
            }
            count += k - j;
            j += 1;
        }
    }

    return count;
};
