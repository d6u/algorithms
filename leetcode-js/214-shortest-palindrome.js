/**
    tags: string

    Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

    For example:

    Given "aacecaaa", return "aaacecaaa".

    Given "abcd", return "dcbabcd".
 */

/**
 * @param  {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  var revS = s.split('').reverse().join('');
  var l = s + '#' + revS;
  var p = makeArray(l.length, 0);
  var i;
  var j;

  for (i = 1; i < l.length; i++) {
    j = p[i-1];
    while (j > 0 && l[i] != l[j]) {
      j = p[j-1];
    }
    p[i] = j + (l[i] === l[j]);
  }

  return revS.substr(0, s.length - p[p.length - 1]) + s;
};

function makeArray(size, filler) {
    'use strict';
    const arr = Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = typeof filler === 'function' ? filler() : filler;
    }
    return arr;
}

console.log(shortestPalindrome("a"));
