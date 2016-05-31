/**
 * @param  {string}      s
 * @param  {set<string>} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    'use strict';

    const breaks = [];

    for (let i = 0; i < s.length; i += 1) {
        breaks[i] = [];
    }

    for (let i = 0; i < s.length; i++) {
        for (const word of wordDict) {
            const wordLen = word.length;

            if (i + 1 < wordLen) {
                continue;
            }

            if (i - wordLen >= 0 && breaks[i - wordLen].length === 0) {
                continue;
            }

            if (s.substr(i - wordLen + 1, wordLen) === word) {
                breaks[i].push(wordLen);
            }
        }
    }

    if (!breaks[breaks.length - 1].length) {
        return [];
    }

    const result = [];
    generateResult(s, s.length - 1, [], breaks, result);
    return result;
};

function generateResult(s, index, currentWords, breaks, result) {
    'use strict';

    if (index < 0) {
        result.push(currentWords.reverse().join(' '));
        return;
    }

    for (const wordLen of breaks[index]) {
        generateResult(
            s,
            index - wordLen,
            currentWords.concat(s.substr(index - wordLen + 1, wordLen)),
            breaks,
            result
        );
    }
}

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
