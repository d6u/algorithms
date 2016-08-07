/**
 * @param  {string}      s
 * @param  {set<string>} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const breaks = [];

    // 1. Array to track where to break, how many char are used before the index
    // to form a word (the lengths of words)
    for (let i = 0; i < s.length; i += 1) {
        breaks[i] = [];
    }

    for (let i = 0; i < s.length; i += 1) {
        for (const word of wordDict) {
            const wordLen = word.length;

            // 2. Has enough char to form current word
            if (i + 1 < wordLen) {
                continue;
            }

            // 3. Has more char to form current word, check last breaking point
            // whether it a break
            if (i - wordLen >= 0 && breaks[i - wordLen].length === 0) {
                continue;
            }

            // 4. If the sub str match current word, record the length of word
            if (s.substr(i - wordLen + 1, wordLen) === word) {
                breaks[i].push(wordLen);
            }
        }
    }

    // 5. If no word has been matched at the last index, no valid answer
    if (!breaks[breaks.length - 1].length) {
        return [];
    }

    const result = [];

    // 6. Go from the last index to generate the solution
    generateResult(s, s.length - 1, [], breaks, result);

    return result;
};

function generateResult(s, index, currentWords, breaks, result) {
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

// console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", new Set(["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])))
