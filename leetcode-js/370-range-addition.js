/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    const result = Array(length).fill(0);

    for (const [start, end, value] of updates) {
        result[start] += value;

        if (end < length - 1) {
            result[end + 1] -= value;
        }
    }

    let sum = 0;

    for (let i = 0; i < length; i += 1) {
        sum += result[i];
        result[i] = sum;
    }

    return result;
};
