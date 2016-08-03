/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length === 0) {
        return 0;
    }

    const dp = Array(s.length + 1).fill(0);

    dp[s.length] = 1;

    if (s[s.length -1] !== '0') {
        dp[s.length-1] = 1;
    }

    for (let i = s.length - 2; i >= 0; i -= 1) {
        if (s.charAt(i) !== '0') {
            dp[i] = parseInt(s.substr(i, 2)) <= 26 ? dp[i+1] + dp[i+2] : dp[i+1];
        }
    }

    return dp[0];
};
