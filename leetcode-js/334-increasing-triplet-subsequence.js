/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let c1 = Infinity;
    let c2 = Infinity;

    for (const n of nums) {
        if (n <= c1) {
            c1 = n;
        } else if (n <= c2) {
            c2 = n;
        } else {
            return true;
        }
    }

    return false;
};
