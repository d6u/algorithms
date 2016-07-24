/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    // dp represent k different cost sum
    const dp = [];

    // Only need to keep smallest and second smallest costs to avoid painting
    // the same color
    let min1 = 0;
    let min2 = 0;

    for (const cost of costs) {
        const oldMin1 = min1;
        const oldMin2 = min2;

        min1 = Infinity;
        min2 = Infinity;

        for (let i = 0; i < cost.length; i += 1) {
            // When cost sum is not smallest or smallest and second smallest
            // is the same
            if (dp[i] !== oldMin1 || oldMin1 === oldMin2) {
                dp[i] = cost[i] + oldMin1;
            } else {
                dp[i] = cost[i] + oldMin2;
            }

            // Maintain smallest and second smallest
            if (min1 < dp[i]) {
                min2 = Math.min(min2, dp[i]);
            } else {
                min2 = min1;
                min1 = dp[i];
            }
        }
    }

    return min1;
};
