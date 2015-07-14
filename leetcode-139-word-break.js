/**
 * @param  {string} s
 * @param  {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  var dp = [];
  var i;
  var j;

  for (i = 0; i <= s.length; i++) {
    dp[i] = false;
  }
  dp[0] = true;

  for (i = 0; i < s.length; i++) {
    for (j = 0; j <= i; j++) {
      if (dp[j] && wordDict.has(s.slice(j, i+1))) {
        dp[i+1] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

var set = new Set();
set.add('a');
set.add('b');

console.log(wordBreak('ab', set));
