/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
    let isOdd = 0;
    const chars = [];
    const charCounts = new Map();

    for (const char of s) {
        const count = charCounts.get(char);
        charCounts.set(char, count ? count + 1 : 1);
        isOdd += charCounts.get(char) % 2 === 0 ? -1 : 1;
    }

    if (isOdd > 1) {
        return [];
    }

    let mid = '';

    for (const [char, count] of charCounts.entries()) {
        if (count % 2 !== 0) {
            mid = char;
        }
        for (let i = 0; i < Math.floor(count / 2); i += 1) {
            chars.push(char);
        }
    }

    const result = [];
    _generatePalindromes(chars, mid, Array(chars.length).fill(false), [], result);
    return result;
};

function _generatePalindromes(chars, mid, used, currentChars, result) {
    if (currentChars.length === chars.length) {
        result.push(currentChars.join('') + mid + currentChars.reverse().join(''));
        currentChars.reverse();
        return;
    }

    for (let i = 0; i < chars.length; i += 1) {
        // avoid duplication
        if (i > 0 && chars[i] === chars[i-1] && !used[i-1]) {
            continue;
        }

        if (!used[i]) {
            used[i] = true;
            currentChars.push(chars[i]);
            _generatePalindromes(chars, mid, used, currentChars, result);
            currentChars.pop();
            used[i] = false;
        }
    }
}
