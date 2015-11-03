/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return checkMatch(s, 0, p, 0);
};

function checkMatch(s, i, p, j) {
    if (!p[j]) {
        return s[i] == null;
    }

    if (p[j+1] !== '*') {
        return ((p[j] === s[i]) || (p[j] === '.' && s[i] != null)) && checkMatch(s, i+1, p, j+1);
    }

    while ((p[j] === s[i]) || (p[j] === '.' && s[i] != null)) {
        if (checkMatch(s, i, p, j+2)) {
            return true;
        }
        i += 1;
    }

    return checkMatch(s, i, p, j+2);
}

isMatch("abbbef", "ab*cde");
