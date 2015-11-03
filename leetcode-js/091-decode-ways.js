/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s.length || s[0] === '0') return 0;

    var dp = Array(s.length + 1);
    var i;

    for (i = 0; i < dp.length; i++) {
        dp[i] = 0;
    }

    dp[0] = 1;

    if (isValid(s[0])) {
        dp[1] = 1;
    } else {
        dp[1] = 0;
    }

    for (i = 1; i < s.length; i++) {
        if (isValid(s[i])) {
            dp[i+1] += dp[i];
        }

        if (isValid(s.substr(i-1, 2))) {
            dp[i+1] += dp[i-1];
        }
    }

    return dp[dp.length-1];
};

function isValid(s) {
    if (s[0] === '0') return false;
    var n = parseInt(s);
    return 1 <= n && n <= 26;
}
