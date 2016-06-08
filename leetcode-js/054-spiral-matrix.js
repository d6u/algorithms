/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    const result = [];

    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        for (let i = colBegin; i <= colEnd; i += 1) {
            result.push(matrix[rowBegin][i]);
        }
        rowBegin += 1;

        for (let i = rowBegin; i <= rowEnd; i += 1) {
            result.push(matrix[i][colEnd]);
        }
        colEnd -= 1;

        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i -= 1) {
                result.push(matrix[rowEnd][i]);
            }
        }
        rowEnd -= 1;

        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i -= 1) {
                result.push(matrix[i][colBegin]);
            }
        }
        colBegin += 1;
    }

    return result;
};
