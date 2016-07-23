/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let holding1 = -Infinity;
    let holding2 = -Infinity;
    let release1 = 0;
    let release2 = 0;

    for (const p of prices) {
        // 1. Buy in at lowest price
        holding2 = Math.max(holding2, release1 - p);

        // 2. Sold out at highest price
        release2 = Math.max(release2, holding2 + p);

        holding1 = Math.max(holding1, -p);
        release1 = Math.max(release1, holding1 + p);
    }

    return release2;
};

console.log(maxProfit([1,2]));
