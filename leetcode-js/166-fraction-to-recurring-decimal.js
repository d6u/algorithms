/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(n, d) {
    if (n === 0) {
        return '0';
    }

    var res = [];

    if (n < 0 ^ d < 0) {
        res.push('-');
    }

    n = Math.abs(n);
    d = Math.abs(d);

    res.push(Math.floor(n / d).toString());

    if (n % d === 0) {
        return res.join('');
    }

    res.push('.');

    var map = new Map();

    for (var r = n % d; r; r %= d) {
        if (map.has(r)) {
            res.splice(map.get(r), 0, '(');
            res.push(')');
            break;
        }

        map.set(r, res.length);

        r *= 10;

        res.push(Math.floor(r / d).toString());
    }

    return res.join('');
};

console.log(fractionToDecimal(1, 6));
console.log(fractionToDecimal(-2147483648, 1));
