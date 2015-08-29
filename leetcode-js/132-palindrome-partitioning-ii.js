/**
 * @param  {string} s
 * @return {number}
 */
var minCut = function(s) {
  var n = s.length;
  var cut = makeArray(n + 1, 0);
  var i;
  var j;

  for (i = 0; i <= n; i++) {
    cut[i] = i - 1;
  }

  for (i = 0; i < n; i++) {
    for (j = 0; i - j >= 0 && i + j < n && s[i-j] === s[i+j]; j++) {
      cut[i+j+1] = Math.min(cut[i+j+1], 1 + cut[i-j]);
    }

    for (j = 1; i - j + 1 >= 0 && i + j < n && s[i-j+1] === s[i+j]; j++) {
      cut[i+j+1] = Math.min(cut[i+j+1], 1 + cut[i-j+1]);
    }
  }

  return cut[n];
};

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}

console.log(minCut('aab'));
