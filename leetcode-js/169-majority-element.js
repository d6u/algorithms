/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let majority;

    for (const n of nums) {
        if (count === 0) {
            majority = n;
        }
        if (majority === n) {
            count += 1;
        } else {
            count -= 1;
        }
    }

    return majority;
};
