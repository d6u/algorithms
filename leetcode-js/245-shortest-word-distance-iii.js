/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
    if (words == null || words.length === 0) {
        return 0;
    }
    var delta = Number.MAX_VALUE;
    var index1 = -1;
    var index2 = -1;

    for (var i = 0; i < words.length; i++) {
        if (word1 === word2) {
            if (words[i] === word1) {
                if (index1 > index2) {
                    index2 = i;
                } else {
                    index1 = i;
                }
            }
        } else {
            if (words[i] === word1) {
                index1 = i;
            }
            if (words[i] === word2) {
                index2 = i;
            }
        }
        if (index1 !== -1 && index2 !== -1) {
            delta = Math.min(delta, Math.abs(index1 - index2));
        }
    }

    return delta;
};
