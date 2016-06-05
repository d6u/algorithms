/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1;
    let col = 0;

    while (row >= 0 && col < matrix[0].length) {
        if (matrix[row][col] > target) {
            row -= 1;
        } else if (matrix[row][col] < target) {
            col += 1;
        } else {
            return true;
        }
    }

    return false;
};
