/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let result = 0;
    const map = new Map();

    for (const n of nums) {
        if (!map.has(n)) {
            // Looking left and right to see if there is any existing sequence,
            // left and right are the lengths
            const left = map.has(n-1) ? map.get(n-1) : 0;
            const right = map.has(n+1) ? map.get(n+1) : 0;

            // Total sequence length
            const sum = left + 1 + right;

            // Set sum here so we know we have visited here, the value is not
            // actually used. This can be used to handle duplicated values
            map.set(n, sum);

            // Set the sequence length at boundaries
            map.set(n-left, sum);
            map.set(n+right, sum);

            result = Math.max(result, sum);
        }
    }

    return result;
};

// console.log(longestConsecutive([1,2,3,2]))
console.log(longestConsecutive([4,0,-4,-2,2,5,2,0,-8,-8,-8,-8,-1,7,4,5,5,-4,6,6,-3]))
