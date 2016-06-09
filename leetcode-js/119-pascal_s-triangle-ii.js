/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }

    let result = [1];
    let row = [1];
    let i = 1;

    while (i <= rowIndex) {
        for (let j = 0; j < i; j += 1) {
            row.push(result[j] + (result[j+1] || 0));
        }
        result = row;
        row = [1];
        i += 1;
    }

    return result;
};
