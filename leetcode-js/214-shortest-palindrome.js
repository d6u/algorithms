/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const sRev = s.split('').reverse().join('');

    // Insert `#` to break prefix matching
    const l = s + '#' + sRev;
    const p = Array(l.length + 1).fill(0);
    let j = 0;

    for (let i = 1; i < l.length; i++) {
        while (j > 0 && l[i] !== l[j]) {
            j = p[j];
        }
        if (l[i] === l[j]) {
            j += 1;
        }
        p[i+1] = j;
    }

    return sRev.substr(0, s.length - j) + s;
};

console.log(shortestPalindrome("aabba"));
console.log(shortestPalindrome("aacecaaa"));
