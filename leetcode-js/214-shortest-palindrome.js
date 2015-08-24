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
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}

console.log(shortestPalindrome("a"));
