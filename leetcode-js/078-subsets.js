/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [[]];

    for (const n of nums) {
        const tmp = [];
        for (const r of result) {
            tmp.push(r.concat(n));
        }
        result = result.concat(tmp);
    }

    return result;
};
