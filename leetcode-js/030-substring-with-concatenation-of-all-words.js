/**
 * @param  {string}   s
 * @param  {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    'use strict';

    if (!s.length) {
        return [];
    }

    const wordCount = words.length;
    const wordLength = words[0].length;
    const totalLength = wordCount * wordLength;

    if (s.length < totalLength) {
        return [];
    }

    const result = [];
    const wordCounter = new Map();

    for (const word of words) {
        const count = wordCounter.get(word);
        if (!count) {
            wordCounter.set(word, 1);
        } else {
            wordCounter.set(word, count + 1);
        }
    }

    for (let i = 0; i <= s.length - totalLength; i += 1) {
        if (check(s, i, wordCounter, wordLength, wordCount)) {
            result.push(i);
        }
    }

    return result;
};

function check(s, startIndex, wordCounter, wordLength, wordCount) {
    'use strict';

    const found = new Map();

    for (let i = 0; i < wordCount; i += 1) {
        const word = s.substr(startIndex + i * wordLength, wordLength);

        if (!wordCounter.get(word)) {
            return false;
        }

        const count = found.get(word);

        if (count) {
            found.set(word, count + 1);
        } else {
            found.set(word, 1);
        }

        if (found.get(word) > wordCounter.get(word)) {
            return false;
        }
    }

    return true;
}
