/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let i = 0;
    let currentMax = 0;
    let numOfJumps = 0;
    let lastMax;

    while (currentMax < nums.length - 1) {
        lastMax = currentMax;
        for (; i <= lastMax; i += 1) {
            currentMax = Math.max(currentMax, i + nums[i]);
        }
        if (currentMax === lastMax) {
            return -1;
        }
        numOfJumps += 1;
    }

    return numOfJumps;
};
