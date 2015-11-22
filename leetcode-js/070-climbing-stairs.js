/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    var n1 = 1;
    var n2 = 2;
    var n3;
    for (var i = 3; i <= n; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n3;
};
