/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    'use strict';

    let sum = 0;
    let minPosition = 0;

    for (let i = 1; i < prices.length; i += 1) {
        if (prices[i] < prices[minPosition]) {
            minPosition = i;
        }
        sum = Math.max(sum, prices[i] - prices[minPosition]);
    }

    return sum;
};
