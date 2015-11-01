var mapping = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y',
    'Z'
];

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var remainder;
    var r = '';

    while (n) {
        n -= 1;
        remainder = n % 26;
        r = mapping[remainder] + r;
        n = Math.floor(n / 26);
    }

    return r;
};
