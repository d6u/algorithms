/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    'use strict';

    const dp = [];
    let min1 = 0;
    let min2 = 0;

    for (let i = 0; i < costs.length; i += 1) {
        const oldMin1 = min1;
        const oldMin2 = min2;
        min1 = Infinity;
        min2 = Infinity;

        for (let j = 0; j < costs[i].length; j += 1) {
            if (dp[j] !== oldMin1 || oldMin1 === oldMin2) {
                dp[j] = costs[i][j] + oldMin1;
            } else {
                dp[j] = costs[i][j] + oldMin2;
            }

            if (min1 < dp[j]) {
                min2 = Math.min(min2, dp[j]);
            } else {
                min2 = min1;
                min1 = dp[j];
            }
        }
    }

    return min1;
};
