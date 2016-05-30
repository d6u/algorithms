/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    'use strict';

    const dp = [];

    for (let i = 0; i < obstacleGrid.length; i += 1) {
        dp[i] = [];
        for (let j = 0; j < obstacleGrid[0].length; j += 1) {
            if (i === 0 && j === 0) {
                dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
            } else if (i === 0) {
                dp[0][j] = obstacleGrid[0][j] === 0 ? dp[0][j-1] : 0;
            } else if (j === 0) {
                dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i-1][0] : 0;
            } else {
                dp[i][j] = obstacleGrid[i][j] === 0 ? dp[i-1][j] + dp[i][j-1] : 0;
            }
        }
    }

    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};
