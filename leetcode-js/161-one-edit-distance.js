/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    const lenS = s.length;
    const lenT = t.length;

    if (lenS < lenT) {
        return isOneEditDistance(t, s);
    }

    if (lenS - lenT > 1) {
        return false;
    }

    const shift = lenS - lenT;
    let i = 0;

    while (i < lenT && s[i] === t[i]) {
        i += 1;
    }

    if (i === lenT) {
        return shift > 0;
    }

    if (shift === 0) {
        i += 1;
    }

    while (i < lenT && s[i + shift] === t[i]) {
        i += 1;
    }

    return i === lenT;
};
