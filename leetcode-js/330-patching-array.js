/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    // Use miss to track numbers in [0, miss) we already know we can build.
    let miss = 1;

    let added = 0;
    let i = 0;

    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            // If we can already build [0, miss),
            // then [0, miss + x) can be also built where `x` is any number
            // no greater than `miss`
            miss += nums[i];
            i += 1;
        } else {
            miss += miss;
            added += 1;
        }
    }

    return added;
};

console.log(minPatches([1,2,31,33], 2147483647));
