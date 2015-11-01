/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) return true;

    s = s.toLowerCase();

    var l = 0;
    var r = s.length - 1;

    while (l < r) {
        if (s.charCodeAt(l) < 48 || (57 < s.charCodeAt(l) && s.charCodeAt(l) < 97) || 122 < s.charCodeAt(l)) {
            l += 1;
            continue;
        }

        if (s.charCodeAt(r) < 48 || (57 < s.charCodeAt(r) && s.charCodeAt(r) < 97) || 122 < s.charCodeAt(r)) {
            r -= 1;
            continue;
        }


        if (s[l] !== s[r]) {
            return false;
        }

        l += 1;
        r -= 1;
    }

    return true;
};

var r = isPalindrome("1a2");

console.log(r);
