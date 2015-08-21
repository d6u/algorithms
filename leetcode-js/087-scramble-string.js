/**
 * @param  {string}  s1
 * @param  {string}  s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  var n = s1.length;
  var dp = makeArray(n, () => makeArray(n, () => makeArray(n+1, false)));
  var i;
  var j;
  var k;
  var l;

  for (i = n-1; i >= 0; i--) {
    for (j = n-1; j >= 0; j--) {
      for (k = 1; k <= n - Math.max(i, j); k++) {

        if (s1.substring(i, i+k) === s2.substring(j, j+k)) {
          dp[i][j][k] = true;
        } else {
          for (l = 1; l < k; l++) {
            if ((dp[i][j][l] && dp[i+l][j+l][k-l]) || (dp[i][j+k-l][l] && dp[i+l][j][k-l])) {
              dp[i][j][k] = true;
              break;
            }
          }
        }

      }
    }
  }

  return dp[0][0][n];
};

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}
