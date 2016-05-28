/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    'use strict';

    const stack = [];
    let result = 0;

    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];

        if (char === '(') {
            stack.push([i, '(']);
        } else if (!stack.length || peek(stack)[1] === ')') {
            stack.push([i, ')']);
        } else {
            stack.pop();
            const len = stack.length ? i - peek(stack)[0] : i + 1;
            result = Math.max(result, len);
        }
    }

    return result;
};

function peek(stack) {
    return stack[stack.length - 1];
}
