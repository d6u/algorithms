/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp1 = [];
    const dp2 = [];

    // 1. Editing distance between substrings of word2 and empty string
    for (let i = 0; i <= word2.length; i += 1) {
        dp1[i] = i;
    }

    // 2. Editing distance between substrings of word1 and word2
    for (let i = 1; i <= word1.length; i += 1) {
        dp2[0] = i;
        for (let j = 1; j <= word2.length; j += 1) {
            if (word1[i - 1] === word2[j - 1]) {
                // 3. No changes to edit distance
                dp2[j] = dp1[j - 1];
            } else {
                // 4. Find the smallest edit distance among three operations
                dp2[j] = Math.min(
                    dp1[j - 1] + 1,
                    dp2[j - 1] + 1,
                    dp1[j] + 1
                );
            }
        }

        // 5. Only need the most last reference
        dp1 = dp2.slice();
    }

    return dp1[word2.length];
};

// minDistance('horse', 'ros');
// minDistance('', '');
minDistance('a', 'abc')
