/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const result = Array(num + 1).fill(0);
    for (let i = 0; i <= num; i += 1) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
};
