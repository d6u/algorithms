/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var stack = [];
    var result = 0;
    var i;
    var c;
    var len;

    for (i = 0; i < s.length; i++) {
        c = s[i];
        if (c === '(') {
            stack.push([i, '(']);
            continue;
        }
        if (stack.length === 0 || peek(stack)[1] === ')') {
            stack.push([i, ')']);
            continue;
        }
        stack.pop();
        if (stack.length) {
            len = i - peek(stack)[0];
        } else {
            len = i + 1;
        }
        result = Math.max(result, len);
    }

    return result;
};

function peek(stack) {
    return stack[stack.length - 1];
}
