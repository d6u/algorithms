// tags: 2d dp

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if (costs.length === 0) return 0;

    var dp = [costs[0]];
    var i;

    for (i = 1; i < costs.length; i++) {
        dp[i] = [
            costs[i][0] + Math.min(dp[i-1][1], dp[i-1][2]),
            costs[i][1] + Math.min(dp[i-1][0], dp[i-1][2]),
            costs[i][2] + Math.min(dp[i-1][0], dp[i-1][1]),
        ];
    }

    return Math.min(dp[costs.length-1][0], dp[costs.length-1][1], dp[costs.length-1][2]);
};
