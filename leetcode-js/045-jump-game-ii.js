/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var i = 0;
    var currentMax = 0;
    var numJumps = 0;
    var lastMax;

    while (currentMax < nums.length - 1) {
        lastMax = currentMax;
        for (; i <= lastMax; i++) {
            currentMax = Math.max(currentMax, i + nums[i]);
        }
        if (currentMax === lastMax) {
            return -1;
        }
        numJumps += 1;
    }

    return numJumps;
};
