/**
 * @param  {string}  s1
 * @param  {string}  s2
 * @param  {string}  s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1 == null || s2 == null || s3 == null) {
    return false;
  }

  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  var dp = makeArray(s1.length + 1, () => makeArray(s2.length + 1, false));
  var i;
  var j;

  dp[0][0] = true;

  for (i = 1; i < s1.length + 1; i++) {
    if (s1[i-1] === s3[i-1] && dp[i-1][0]) {
      dp[i][0] = true;
    }
  }

  for (j = 1; j < s2.length + 1; j++) {
    if (s2[j-1] === s3[j-1] && dp[0][j-1]) {
      dp[0][j] = true;
    }
  }

  for (i = 0; i < s1.length + 1; i++) {
    for (j = 1; j < s2.length + 1; j++) {
      if (s1[i-1] === s3[i+j-1] && dp[i-1][j]) {
        dp[i][j] = true;
      }

      if (s2[j-1] === s3[i+j-1] && dp[i][j-1]) {
        dp[i][j] = true;
      }
    }
  }

  return dp[s1.length][s2.length];
};

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}
