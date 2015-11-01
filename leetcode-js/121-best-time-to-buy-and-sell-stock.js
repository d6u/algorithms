/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0 || prices.length === 1) return 0;

    var min = 0;
    var sum = 0;
    var i;

    for (i = 1; i < prices.length; i++) {
        if (prices[i] < prices[min]) {
            min = i;
        }
        sum = Math.max(sum, prices[i] - prices[min]);
    }

    return Math.max(0, sum);
};
