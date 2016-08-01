/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const result = [];
    remove(s, 0, 0, ['(', ')'], result);
    return result;
};

function remove(s, lastI, lastJ, parentheses, result) {
    let counter = 0;

    for (let i = lastI; i < s.length; i += 1) {
        if (s[i] === parentheses[0]) {
            counter += 1;
        } else if (s[i] === parentheses[1]) {
            counter -= 1;
        }
        if (counter >= 0) {
            // still valid
            continue;
        }

        for (let j = lastJ; j <= i; j += 1) {
            if (s[j] === parentheses[1] &&
                // Make sure s[j] is the first "(" or ")"
                (j === lastJ || s[j - 1] !== parentheses[1])) {

                remove(removeCharAt(s, j), i, j, parentheses, result);
            }
        }

        return;
    }

    const reversed = s.split('').reverse().join('');

    if (parentheses[0] === '(') {
        // Finished left to right
        remove(reversed, 0, 0, [')', '('], result);
    } else {
        // Finished right to left
        // Only add current string once after both left to right and right to left
        result.push(reversed);
    }
}

function removeCharAt(str, i) {
    return str.substring(0, i) + str.substring(i + 1);
}

console.log(removeInvalidParentheses("()())()"));
console.log(removeInvalidParentheses("(j))("));
