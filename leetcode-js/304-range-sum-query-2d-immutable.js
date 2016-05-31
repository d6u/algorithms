/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    'use strict';

    this.dp = [];

    if (!matrix.length) {
        return;
    }

    for (let i = 0; i < matrix.length + 1; i += 1) {
        this.dp[i] = [];
        for (let j = 0; j < matrix[0].length + 1; j += 1) {
            if (i === 0) {
                this.dp[0][j] = 0;
            } else if (j === 0) {
                this.dp[i][0] = 0;
            } else {
                this.dp[i][j] = this.dp[i-1][j] + this.dp[i][j-1] - this.dp[i-1][j-1] + matrix[i-1][j-1];
            }
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2+1][col2+1] - this.dp[row2+1][col1] - this.dp[row1][col2+1] + this.dp[row1][col1];
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
