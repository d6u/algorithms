/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i;
    var sum = 0;

    for (i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            sum += prices[i] - prices[i-1];
        }
    }

    return sum;
};
