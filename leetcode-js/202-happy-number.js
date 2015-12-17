/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var s = new Set();
    do {
        n = sum(n);
        if (s.has(n)) {
            return false;
        }
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
