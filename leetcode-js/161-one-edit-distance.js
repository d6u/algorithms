/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    var ls = s.length;
    var lt = t.length;

    if (ls < lt) return isOneEditDistance(t, s);
    if (ls - lt > 1) return false;

    var i = 0;
    var shift = ls - lt;

    while (i < lt && s[i] === t[i]) {
        i += 1;
    }

    if (i === lt) return shift > 0;
    if (shift === 0) i += 1;

    while (i < lt && s[i+shift] === t[i]) {
        i += 1;
    }

    return i === lt;
};
