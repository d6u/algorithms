/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;

    var left = Array(prices.length);
    var right = Array(prices.length);
    var i;
    var minPrice;
    var maxPrice;

    left[0] = 0;
    minPrice = prices[0];

    for (i = 1; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        left[i] = Math.max(left[i-1], prices[i] - minPrice);
    }

    right[prices.length-1] = 0;
    maxPrice = prices[prices.length-1];

    for (i = prices.length - 2; i >= 0; i--) {
        maxPrice = Math.max(prices[i], maxPrice);
        right[i] = Math.max(right[i+1], maxPrice - prices[i]);
    }

    var profit = 0;

    for (i = 0; i < prices.length; i++) {
        profit = Math.max(profit, left[i] + right[i]);
    }

    return profit;
};
