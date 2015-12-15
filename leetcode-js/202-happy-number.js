/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var n2;
    var s = new Set();
    do {
        n2 = sum(n);
        if (s.has(n2)) {
            return false;
        }
        n = n2;
        s.add(n);
    } while (n !== 1);
    return true;
};

function sum(n) {
    var m;
    var t = 0;
    while (n) {
        m = n % 10;
        t += m * m;
        n = Math.floor(n / 10);
    }
    return t;
}
