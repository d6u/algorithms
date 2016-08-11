const PAIRS = {
    '(': ')',
    '{': '}',
    '[': ']',
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (const c of s) {
        if (!stack.length || PAIRS[stack[stack.length-1]] !== c) {
            stack.push(c);
        } else {
            stack.pop();
        }
    }
    return stack.length === 0;
};
