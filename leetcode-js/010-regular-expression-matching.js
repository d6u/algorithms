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

    // 1. If next char in p is not *, check everything as usual
    if (p[j+1] !== '*') {
        return (s[i] === p[j] || (p[j] === '.' && s[i] != null)) &&
            check(s, i + 1, p, j + 1);
    }

    while (true) {
        // 2. When next char in p is *, begin with 0 match for *
        if (check(s, i, p, j + 2)) {
            return true;
        }

        // 3. Increase matches for * by 1, if doesn't match, s doesn't match p
        if (!(s[i] === p[j] || (p[j] === '.' && s[i] != null))) {
            return false;
        }

        // 4. Match for * has been increased
        i += 1;
    }
}

console.log(isMatch('a', 'b*a'))
console.log(isMatch("abbbef", "ab*bdf"));
console.log(isMatch("aa", "a"));
console.log(isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*a*a*b"));
