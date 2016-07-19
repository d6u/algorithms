/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const sl = s.length;
    const tl = t.length;

    // 1. Use array as a map of 26 letters include both lower and upper cases
    const needToFind = Array(122).fill(0);

    // 2. Record how many we need to find
    for (let i = 0; i < tl; i++) {
        needToFind[charToInt(t[i])] += 1;
    }

    const hasFound = Array(122).fill(0);
    let minWindowLen = sl;
    let minWindowBegin = 0;
    let count = 0;

    for (let begin = 0, end = 0; end < sl; end += 1) {

        // 3. Start by extending the end of the window
        const endCharInt = charToInt(s[end]);

        if (needToFind[endCharInt] === 0) {
            continue;
        }

        hasFound[endCharInt] += 1;

        if (hasFound[endCharInt] <= needToFind[endCharInt]) {
            // 4. Maintain a count of chars from t that's included
            count += 1;
        }

        // 5. When all chars in t are found,
        // start reducing the window from start
        if (count === tl) {
            let beginCharInt = charToInt(s[begin]);

            while (needToFind[beginCharInt] === 0 || hasFound[beginCharInt] > needToFind[beginCharInt]) {
                if (hasFound[beginCharInt] > needToFind[beginCharInt]) {
                    hasFound[beginCharInt] -= 1;
                }
                begin += 1;
                beginCharInt = charToInt(s[begin]);
            }

            const windowLen = end - begin + 1;

            // 6. When found a smaller length, update the records
            if (windowLen < minWindowLen) {
                minWindowBegin = begin;
                minWindowLen = windowLen;
            }
        }
    }

    return count === tl ? s.substr(minWindowBegin, minWindowLen) : '';
};

function charToInt(c) {
    return c.charCodeAt(0) - 65;
}
