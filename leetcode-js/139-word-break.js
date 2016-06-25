/**
 * @param  {string} s
 * @param  {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = Array(s.length+1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (dp[j] && wordDict.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[dp.length-1];
};

var set = new Set();
set.add('a');
set.add('b');

console.log(wordBreak('ab', set));
