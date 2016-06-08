/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];
    let lastRow = [];

    for (let i = 0; i < numRows; i += 1) {
        const row = [1];
        for (let j = 1; j < i + 1; j += 1) {
            row.push(lastRow[j-1] + (lastRow[j] || 0));
        }
        result.push(row);
        lastRow = row;
    }

    return result;
};
