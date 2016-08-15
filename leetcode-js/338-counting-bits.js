/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const result = Array(num + 1).fill(0);
    for (let i = 1; i <= num; i += 1) {
        // Some kinda of dynamic programing
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
};
