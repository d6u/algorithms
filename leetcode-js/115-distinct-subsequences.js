/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    if (t.length > s.length) {
        return 0;
    }

    // 1. path[i] means how many unique subsequence in S given a substring of T
    // that ends at i (not include i), e.g. path[0] means ""
    const path = Array(t.length + 1).fill(0);

    // 2. "" is subsequence of any string, and only once
    path[0] = 1;

    for (let i = 0; i < s.length; i += 1) {
        // 3. Start from end because we want to reuse `path`.
        // We are actually comparing `path` from last iteration
        for (let j = t.length - 1; j >= 0; j -= 1) {
            path[j+1] += t[j] === s[i] ? path[j] : 0;
        }
    }

    return path[t.length];
};

console.log(numDistinct('rabbbit', 'rabbit'));
