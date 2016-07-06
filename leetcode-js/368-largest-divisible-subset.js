/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);

    const T = Array(nums.length).fill(0);
    const children = Array(nums.length).fill(0);

    let m = 0;
    let mi;

    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i; j >= 0; j -= 1) {
            if (nums[i] % nums[j] === 0 && T[j] + 1 > T[i]) {
                T[i] = 1 + T[j];
                children[i] = j;
            }
        }
        if (T[i] > m) {
            m = T[i];
            mi = i;
        }
    }

    const result = [];

    for (let i = 0; i < m; i += 1) {
        result.push(nums[mi]);
        mi = children[mi];
    }

    return result;
};

console.log(largestDivisibleSubset([1]));
