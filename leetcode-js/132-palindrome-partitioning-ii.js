/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const dp = [];

    // 1. Number of cut needed for each length of s, without any calculation
    for (let i = 0; i < s.length + 1; i += 1) {
        dp[i] = i - 1;
    }

    for (let i = 0; i < s.length; i += 1) {
        // 2. Use current char as the center, comparing letter to two sides.
        // This loop is for odd length palindroms.
        for (let j = 0;
            i - j >= 0 && i + j < s.length && s[i-j] === s[i+j];
            j += 1) {

            dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i-j] + 1);
        }

        // 3. Use current char as the center, comparing letter to two sides.
        // This loop is for even length palindroms.
        for (let j = 1;
            i - j + 1 >= 0 && i + j < s.length && s[i-j+1] === s[i+j];
            j += 1) {

            dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i-j+1] + 1);
        }
    }

    return dp[s.length];
};
