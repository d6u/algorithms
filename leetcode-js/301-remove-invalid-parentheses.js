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
            const t = str.substring(0, i) + str.substring(i + 1);
            if (!visited.has(t)) {
                queue.push(t);
                visited.add(t);
            }
        }
    }

    return results;
};

function isValid(s) {
    let count = 0;
    for (const c of s) {
        if (c === '(') {
            count += 1;
        } else if (c === ')') {
            count -= 1;
        }
        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}

console.log(removeInvalidParentheses("()())()"));
console.log(removeInvalidParentheses("(j))("));
