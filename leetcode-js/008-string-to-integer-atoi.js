/**
 * @param {string} str
 * @return {number}
 */
var atoi = function(str) {
    if (!str.length) {
        return 0;
    }

    var i = 0;

    while (str[i] === ' ') {
        i += 1;
    }

    var sign = '+';
    var char = str[i];

    if (char === '+' || char === '-') {
        sign = char;
        i += 1;
    }

    var num = 0;

    for (; i < str.length; i++) {
        var n = str.charCodeAt(i) - 48;
        if (n >= 0 && n <= 9) {
            num = num * 10 + n;
        } else {
            break;
        }
    }

    num = sign === '-' ? - num : num;

    if (num > 2147483647) return 2147483647;
    if (num < -2147483648) return -2147483648;

    return num;
};
