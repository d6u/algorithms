/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;

    for (let y = 0; y < len - 1; y += 1) {
        for (let x = 0; x < len - y - 1; x += 1) {
            const tmp = matrix[y][x];
            matrix[y][x] = matrix[len - 1 - x][len - 1 - y];
            matrix[len - 1 - x][len - 1 - y] = tmp;
        }
    }

    for (let y = 0; y < Math.floor(len / 2); y += 1) {
        for (let x = 0; x < len; x += 1) {
            const tmp = matrix[y][x];
            matrix[y][x] = matrix[len - 1 - y][x];
            matrix[len - 1 - y][x] = tmp;
        }
    }
};
