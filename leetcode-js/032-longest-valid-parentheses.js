/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [];
    let result = 0;

    // 1. Scan the string from start
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];

        if (char === '(') {
            // 2. Push ( to stack
            stack.push([i, '(']);
        } else if (!stack.length || peek(stack)[1] === ')') {
            // 3. if stack is empty, or top of stack is )
            stack.push([i, ')']);
        } else {
            // 4. When current char is ) and top of stack is (,
            // remove top
            stack.pop();

            // 5. Calculate distance between current index and top letter's
            // index within stack
            const len = stack.length ? i - peek(stack)[0] : i + 1;

            result = Math.max(result, len);
        }
    }

    return result;
};

function peek(stack) {
    return stack[stack.length - 1];
}
