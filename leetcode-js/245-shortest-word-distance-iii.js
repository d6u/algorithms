/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
    if (words.length === 0) {
        return 0;
    }

    let distance = Infinity;
    let i1 = -1;
    let i2 = -1;

    for (let i = 0; i < words.length; i += 1) {
        if (word1 === word2) {
            if (words[i] === word1) {
                if (i1 > i2) {
                    i2 = i;
                } else {
                    i1 = i;
                }
            }
        } else {
            if (words[i] === word1) {
                i1 = i;
            } else if (words[i] === word2) {
                i2 = i;
            }
        }
        if (i1 !== -1 && i2 !== -1) {
            distance = Math.min(distance, Math.abs(i1 - i2));
        }
    }

    return distance;
};
