/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    // 1. If we can execute more hands than price point, it's simple
    if (k >= prices.length) {
        return simpleMaxProfit(prices);
    }

    // 2. local[i] means max profit when sold at ith transaction
    const local = Array(k+1).fill(0);

    // 3. globa[i] means max profit when i times transaction is allowed
    const globa = Array(k+1).fill(0);

    for (let i = 1; i < prices.length; i += 1) {
        const diff = prices[i] - prices[i-1];

        for (let j = k; j >= 1; j -= 1) {
            // 3. Both local and globa are actually comparing with
            // local and globa from last iteration of prices.
            // We could have defined local and globa as 2D array.
            local[j] = Math.max(local[j] + diff, globa[j - 1] + diff);
            globa[j] = Math.max(globa[j], local[j]);
        }
    }

    return globa[k];
};

function simpleMaxProfit(prices) {
    let result = 0;
    for (let i = 1; i < prices.length; i += 1) {
        if (prices[i] > prices[i-1]) {
            result += prices[i] - prices[i-1];
        }
    }
    return result;
}
