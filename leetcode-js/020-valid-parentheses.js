var map = {
    '(': ')',
    '[': ']',
    '{': '}',
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) {
        return false;
    }

    const stack = [map[s[0]]];

    for (let i = 1; i < s.length; i += 1) {
        if (stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(map[s[i]]);
        }
    }

    return stack.length === 0;
};
