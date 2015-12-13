var map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var x = 0;
    var i;
    var last;
    var cur;

    for (i = s.length - 1; i >= 0; i--) {
        cur = map[s[i]];
        if (last && cur < last) {
            x -= cur;
        } else {
            x += cur;
        }
        last = cur;
    }

    return x;
};
