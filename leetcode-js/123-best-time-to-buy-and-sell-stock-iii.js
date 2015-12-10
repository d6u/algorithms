/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var hold1 = -Infinity;
    var hold2 = -Infinity;
    var release1 = 0;
    var release2 = 0;

    for (var p of prices) {
        release2 = Math.max(release2, hold2 + p);
        hold2    = Math.max(hold2,    release1 - p);
        release1 = Math.max(release1, hold1 + p);
        hold1    = Math.max(hold1,    -p);
    }

    return release2;
};

console.log(maxProfit([1,2]));
