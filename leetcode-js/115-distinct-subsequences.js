/**
 * @param  {string} s
 * @param  {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  var dp = Array(s.length + 1);
  var si;
  var ti;

  for (si = 0; si < dp.length; si++) {
    dp[si] = Array(t.length + 1);
    for (ti = 0; ti < dp[si].length; ti++) {
      dp[si][ti] = 0;
    }
  }

  for (si = 0; si < s.length; si++) {
    dp[si][0] = 1;
  }

  for (si = 1; si <= s.length; si++) {
    for (ti = 1; ti <= t.length; ti++) {
      if (s[si - 1] === t[ti - 1]) {
        dp[si][ti] = dp[si-1][ti] + dp[si-1][ti-1];
      } else {
        dp[si][ti] = dp[si-1][ti];
      }
    }
  }

  return dp[s.length][t.length];
};
