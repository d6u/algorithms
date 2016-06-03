/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    let i1 = -1;
    let i2 = -1;
    let minDistance = Infinity;

    for (const [index, word] of words.entries()) {
        if (word === word1) {
            i1 = index;
        } else if (word === word2) {
            i2 = index;
        }

        if (i1 !== -1 && i2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(i1 - i2));
        }
    }

    return minDistance;
};
