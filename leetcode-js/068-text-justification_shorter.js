/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    'use strict';

    const result = [];

    for (let start = 0, lineWordCount, wordsTotalLength;
        start < words.length;
        start += lineWordCount)
    {
        lineWordCount = wordsTotalLength = 0;

        for (;
            start + lineWordCount < words.length &&
            wordsTotalLength + words[start + lineWordCount].length <= maxWidth - lineWordCount;
            lineWordCount += 1)
        {
            wordsTotalLength += words[start + lineWordCount].length;
        }

        let line = words[start];

        for (let i = 0; i < lineWordCount - 1; i += 1) {
            if (start + lineWordCount === words.length) {
                line += ' ';
            } else {
                line += ' '.repeat(Math.floor(maxWidth - wordsTotalLength) / (lineWordCount - 1));
                if (i < (maxWidth - wordsTotalLength) % (lineWordCount - 1)) {
                    line += ' ';
                }
            }
            line += words[start + i + 1];
        }

        line += ' '.repeat(maxWidth - line.length);

        result.push(line);
    }

    return result;
};

console.log(fullJustify(["Don't","go","around","saying","the","world","owes","you","a","living;","the","world","owes","you","nothing;","it","was","here","first."], 30));
