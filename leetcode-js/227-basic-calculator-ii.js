/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    'use strict';

    const stack = [];
    let operator = '+';
    let n = 0;

    for (let i = 0; i <= s.length; i += 1) {
        const char = s[i];
        const int = parseInt(char);
        if (!isNaN(int)) {
            n = n * 10 + int;
        } else if (char !== ' ') {
            if (operator === '-') {
                n = -n;
            } else if (operator === '*') {
                n = n * stack.pop();
            } else if (operator === '/') {
                n = Math.trunc(stack.pop() / n);
            }
            stack.push(n);
            n = 0;
            operator = char;
        }
    }

    return stack.reduce((sum, n) => sum + n, 0);
};

console.log(calculate('3-5-7'));
