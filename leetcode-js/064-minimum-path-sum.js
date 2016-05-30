/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    'use strict';

    const dp = [];

    for (let i = 0; i < grid.length; i += 1) {
        dp[i] = [];
        for (let j = 0; j < grid[0].length; j += 1) {
            if (i === 0 && j === 0) {
                dp[0][0] = grid[0][0];
            } else if (i === 0) {
                dp[0][j] = grid[0][j] + dp[0][j-1];
            } else if (j === 0) {
                dp[i][0] = grid[i][0] + dp[i-1][0];
            } else {
                dp[i][j] = grid[i][j] + Math.min(dp[i][j-1], dp[i-1][j]);
            }
        }
    }

    return dp[grid.length-1][grid[0].length-1];
};
