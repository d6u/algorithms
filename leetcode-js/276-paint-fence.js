/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return k;
    }
    var diffColorCounts = k * (k - 1);
    var sameColorCounts = k;
    for (var i = 2; i < n; i++) {
        var temp = diffColorCounts;
        diffColorCounts = (diffColorCounts + sameColorCounts) * (k - 1);
        sameColorCounts = temp;
    }
    return diffColorCounts + sameColorCounts;
};
