/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }

    var i = 1;
    var s = '1';

    while (i < n) {
        s = say(s);
        i += 1;
    }

    return s;
};

function say(s) {
    var r = '';
    var pre = s[0];
    var c = 1;
    var i;

    for (i = 1; i < s.length; i++) {
        if (pre === s[i]) {
            c += 1;
        } else {
            r += c;
            r += pre;
            pre = s[i];
            c = 1;
        }
    }

    r += c;
    r += pre;

    return r;
}
