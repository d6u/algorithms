/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const dp = [];

    // 1. Loop through the matrix from bottom
    for (let i = dungeon.length - 1; i >= 0; i -= 1) {
        dp[i] = Array(dungeon[0].length - 1);
        for (let j = dungeon[0].length - 1; j >= 0; j -= 1) {
            if (i === dungeon.length - 1 && j === dungeon[0].length - 1) {
                // 2. Last cell, knight must have at least 1 HP
                dp[i][j] = Math.max(1, 1 - dungeon[i][j]);
            } else if (i === dungeon.length - 1) {
                // 3. Edge of matrix
                dp[i][j] = Math.max(1, dp[i][j+1] - dungeon[i][j]);
            } else if (j === dungeon[0].length - 1) {
                // 3. Edge of matrix
                dp[i][j] = Math.max(1, dp[i+1][j] - dungeon[i][j]);
            } else {
                // 4. Normal cell of matrix
                dp[i][j] = Math.min(
                    Math.max(1, dp[i+1][j] - dungeon[i][j]),
                    Math.max(1, dp[i][j+1] - dungeon[i][j])
                );
            }
        }
    }

    return dp[0][0];
};
