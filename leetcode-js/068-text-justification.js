/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    'use strict';

    if (!words.length) {
        return [];
    }

    if (!words[0].length) {
        return [' '.repeat(maxWidth)];
    }

    const result = [];

    let start = 0;
    let i = 0;

    while (i < words.length) {
        let lineLength = words[i].length;

        i += 1;

        while (i !== words.length && lineLength + 1 + words[i].length <= maxWidth) {
            lineLength = lineLength + 1 + words[i].length;
            i += 1;
        }

        result.push(concatWords(words.slice(start, i), maxWidth, i === words.length));
        start = i;
    }

    return result;
};

function concatWords(words, maxWidth, isLast) {
    'use strict';

    if (words.length === 1) {
        return words[0] + ' '.repeat(maxWidth - words[0].length);
    }

    if (isLast) {
        const str = words.join(' ');
        return str + ' '.repeat(maxWidth - str.length);
    }

    const wordsTotalLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageSpacesLength = Math.floor((maxWidth - wordsTotalLength) / (words.length - 1));
    let reminderSpaceCount = (maxWidth - wordsTotalLength) % (words.length - 1);

    let result = words[0];

    for (const word of words.slice(1)) {
        if (reminderSpaceCount) {
            result += ' '.repeat(averageSpacesLength + 1);
            reminderSpaceCount -= 1;
        } else {
            result += ' '.repeat(averageSpacesLength);
        }
        result += word;
    }

    return result;
}

console.log(fullJustify(["Don't","go","around","saying","the","world","owes","you","a","living;","the","world","owes","you","nothing;","it","was","here","first."], 30));
