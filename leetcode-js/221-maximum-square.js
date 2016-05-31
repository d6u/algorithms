/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    'use strict';

    const dp = [];
    let edge = 0;

    for (let i = 0; i < matrix.length; i += 1) {
        dp[i] = [];
        for (let j = 0; j < matrix[0].length; j += 1) {
            dp[i][j] = parseInt(matrix[i][j]);
            if (i && j && dp[i][j]) {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
            }
            edge = Math.max(dp[i][j], edge);
        }
    }

    return edge * edge;
};
