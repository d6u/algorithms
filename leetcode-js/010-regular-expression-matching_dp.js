/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    /**
     * dp[i][j]: if s[0..i-1] matches p[0..j-1]
     * if p[j - 1] != '*'
     *      dp[i][j] = dp[i - 1][j - 1] && s[i - 1] == p[j - 1]
     * if p[j - 1] == '*', denote p[j - 2] with x
     *      dp[i][j] is true if any of the following is true
     *      1) 'x*' repeats 0 time and matches empty: dp[i][j - 2]
     *      2) 'x*' repeats >= 1 times and matches 'x*x': s[i - 1] == x && dp[i - 1][j]
     * '.' matches any single character
     */
    const dp = Array(m+1).fill().map(() => Array(n+1).fill(false));
    dp[0][0] = true;

    // match "" with p
    // p[0.., j - 3, j - 2, j - 1] matches empty if p[j - 1] is '*' and p[0..j - 3] matches empty
    for (let j = 1; j < n + 1; j += 1) {
        dp[0][j] = j > 1 && p[j-1] === '*' && dp[0][j-2];
    }

    for (let i = 1; i < m + 1; i += 1) {
        for (let j = 1; j < n + 1; j += 1) {
            if (p[j-1] !== '*') {
                dp[i][j] = dp[i-1][j-1] && (p[j-1] === s[i-1] || p[j-1] === '.');
            } else {
                // p[0] cannot be '*' so no need to check 'j > 1' here
                dp[i][j] = dp[i][j-2] || (p[j-2] === s[i-1] || p[j-2] === '.') && dp[i-1][j];
            }
        }
    }

    return dp[m][n];
};

// console.log(isMatch('a', 'b*a'))
// console.log(isMatch('abbbef', 'ab*bdf'));
// console.log(isMatch('aa', 'a'));
console.log(isMatch('aaaaaaaaaaaaab', 'a*a*a*a*a*a*a*a*a*a*a*a*b'));
