/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    'use strict';

    if (k >= prices.length) {
        return simpleMaxProfit(prices);
    }

    const local = Array(k+1).fill(0);
    const globa = Array(k+1).fill(0);

    for (let i = 1; i < prices.length; i += 1) {
        const diff = prices[i] - prices[i-1];
        for (let j = k; j >= 1; j -= 1) {
            local[j] = Math.max(
                globa[j-1] + Math.max(diff, 0),
                local[j] + diff
            );
            globa[j] = Math.max(globa[j], local[j]);
        }
    }

    return globa[k];
};

function simpleMaxProfit(prices) {
    'use strict';

    let result = 0;
    for (let i = 1; i < prices.length; i += 1) {
        if (prices[i] > prices[i-1]) {
            result += prices[i] - prices[i-1];
        }
    }
    return result;
}
