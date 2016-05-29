/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    'use strict';

    const revS = s.split('').reverse().join('');
    const l = s + '#' + revS;
    const p = Array(l.length).fill(0);

    for (let i = 1; i < l.length; i++) {
        let j = p[i - 1];
        while (j > 0 && l[i] != l[j]) {
            j = p[j - 1];
        }
        p[i] = j + (l[i] === l[j]);
    }

    return revS.substr(0, s.length - p[p.length - 1]) + s;
};

console.log(shortestPalindrome("aabba"));
console.log(shortestPalindrome("aacecaaa"));
