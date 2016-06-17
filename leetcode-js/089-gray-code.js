/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if (n < 0) {
        return [];
    }

    const result = [0];
    let increment = 1;

    for (let i = 1; i <= n; i += 1) {
        for (let j = result.length - 1; j >= 0; j -= 1) {
            result.push(result[j] + increment);
        }
        increment <<= 1;
    }

    return result;
};
