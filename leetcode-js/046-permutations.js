/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [[nums[0]]];

    for (let i = 1; i < nums.length; i++) {
        const newRes = [];

        for (const r of res) {
            for (let j = 0; j <= i; j++) {
                r.splice(j, 0, nums[i]);
                newRes.push(r.slice());
                r.splice(j, 1);
            }
        }

        res = newRes;
    }

    return res;
};
