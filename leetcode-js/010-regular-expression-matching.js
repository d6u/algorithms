/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return check(s, 0, p, 0);
};

function check(s, i, p, j) {
    if (!p[j]) {
        return s[i] == null;
    }

    if (p[j+1] !== '*') {
        return (s[i] === p[j] || (p[j] === '.' && s[i] != null)) && check(s, i + 1, p, j + 1);
    }

    while (true) {
        if (check(s, i, p, j + 2)) {
            return true;
        }
        if (!(s[i] === p[j] || (p[j] === '.' && s[i] != null))) {
            break;
        }
        i += 1;
    }

    return false;
}

console.log(isMatch('a', 'b*a'))
console.log(isMatch("abbbef", "ab*bdf"));
console.log(isMatch("aa", "a"));
console.log(isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*a*a*b"));
