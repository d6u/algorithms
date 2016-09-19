'use strict';

function removeInvalidParentheses(s, l = '(', r = ')') {
    let count = 0;
    let i = 0;
    while (i < s.length) {
        if (s[i] === l) {
            count++;
        } else if (s[i] === r) {
            count--;
        }
        if (count >= 0) {
            i++;
            continue;
        }
        s = s.substring(0, i) + s.substring(i + 1);
        count++;
    }
    const rev = s.split('').reverse().join('');
    if (l === '(') {
        return removeInvalidParentheses(rev, ')', '(')
    } else {
        return rev;
    }
}

console.log(removeInvalidParentheses(")"));
console.log(removeInvalidParentheses("("));
console.log(removeInvalidParentheses("(((((("));
console.log(removeInvalidParentheses("a"));
console.log(removeInvalidParentheses("()())()"));
console.log(removeInvalidParentheses("(j))("));
