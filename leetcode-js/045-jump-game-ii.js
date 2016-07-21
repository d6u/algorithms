/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let currentMax = 0;
    let i = 0;
    let numOfJumps = 0;

    // 1. Start from beginning
    while (currentMax < nums.length - 1) {
        // 2. Save last maximum
        const lastMax = currentMax;

        // 3. Search from current index to last maximum, and update new maximum
        for (; i <= lastMax; i += 1) {
            currentMax = Math.max(currentMax, i + nums[i]);
        }

        // 4. If maximum didn't update, means we will never reach the end
        if (currentMax === lastMax) {
            return -1;
        }

        numOfJumps += 1;
    }

    return numOfJumps;
};
