/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    'use strict';

    const result = [];

    // 1. Iterate through each word
    for (let start = 0, lineWordCount, wordsTotalLength;
        start < words.length;
        start += lineWordCount)
    {
        lineWordCount = wordsTotalLength = 0;

        // 2. Find what's the max number of words current line can contain,
        // leaving enough spaces
        while (start + lineWordCount < words.length &&
            wordsTotalLength + words[start + lineWordCount].length <= maxWidth - lineWordCount)
        {
            wordsTotalLength += words[start + lineWordCount].length;
            lineWordCount += 1;
        }

        let line = words[start];

        for (let i = 0; i < lineWordCount - 1; i += 1) {
            if (start + lineWordCount === words.length) {
                // 3. It's the last line, just add one space between each word
                line += ' ';
            } else {
                // 4. First allocate the everage space
                line += ' '.repeat(Math.floor(maxWidth - wordsTotalLength) / (lineWordCount - 1));

                // 5. Allocate extra one space for words with index lower than certain index
                if (i < (maxWidth - wordsTotalLength) % (lineWordCount - 1)) {
                    line += ' ';
                }
            }

            line += words[start + i + 1];
        }

        // 6. This will affect the last line.
        // Fill up the right of line with spaces.
        line += ' '.repeat(maxWidth - line.length);

        result.push(line);
    }

    return result;
};

console.log(fullJustify(["Don't","go","around","saying","the","world","owes","you","a","living;","the","world","owes","you","nothing;","it","was","here","first."], 30));
