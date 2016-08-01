/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const results = [];
    const visited = new Set();
    const queue = [];

    visited.add(s);
    queue.push(s);

    let found = false;

    // 1. Going through each level, every level we remove one parenthese
    while (queue.length) {
        const str = queue.shift();
        if (isValid(str)) {
            results.push(str);
            found = true;
        }
        if (found) {
            continue;
        }
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] !== '(' && str[i] !== ')') {
                continue;
            }
            const t = removeCharAtIndex(str, i);

            // 2. Use set to prevent duplicate
            if (!visited.has(t)) {
                queue.push(t);
                visited.add(t);
            }
        }
    }

    return results;
};

function isValid(str) {
    let count = 0;

    for (const c of str) {
        if (c === '(') {
            count += 1;
        } else if (c === ')') {
            count -= 1;
            if (count < 0) {
                return false;
            }
        }
    }

    return count === 0;
}

function removeCharAtIndex(str, i) {
    return str.substring(0, i) + str.substring(i + 1);
}

console.log(removeInvalidParentheses("()())()"));
console.log(removeInvalidParentheses("(j))("));
