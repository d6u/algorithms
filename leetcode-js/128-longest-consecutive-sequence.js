/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let result = 0;
    const map = new Map();

    for (const n of nums) {
        if (!map.has(n)) {
            const left = map.has(n-1) ? map.get(n-1) : 0;
            const right = map.has(n+1) ? map.get(n+1) : 0;
            const sum = left + 1 + right;

            map.set(n, sum);
            map.set(n-left, sum);
            map.set(n+right, sum);

            result = Math.max(result, sum);
        }
    }

    return result;
};

console.log(longestConsecutive([1,2,3,2]))
