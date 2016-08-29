const OPERATORS = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '(': 3,
    ')': 3,
};

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];

    // 1. Reverse polish notation
    const rpn = [];

    // 2. Split s into numbers and operators
    for (const _p of s.split(/([+\-*/()])/)) {

        const p = _p.trim();

        if (!p) {
            continue;
        }

        // 3. Convert 1 + 1 * 2 to `1,1,2,*,+`

        if (!OPERATORS[p]) {
            rpn.push(p);
            continue;
        }

        if (!stack.length) {
            stack.push(p);
        } else if (p === '(') {
            stack.push(p);
        } else if (p === ')') {
            let operator = stack.pop();
            while (operator !== '(') {
                rpn.push(operator);
                operator = stack.pop();
            }
        } else if (peek(stack) === '(' || OPERATORS[p] > OPERATORS[peek(stack)]) {
            stack.push(p);
        } else {
            while (stack.length && peek(stack) !== '(' && OPERATORS[p] <= OPERATORS[peek(stack)]) {
                rpn.push(stack.pop());
            }
            stack.push(p);
        }
    }

    while (stack.length) {
        rpn.push(stack.pop());
    }

    // return rpn;

    return evalRPN(rpn);
};

// console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
// console.log(calculate("1+2*3-4"));

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    // 4. Evaluate from start
    for (const token of tokens) {
        if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
            stack.push(parseInt(token));
        } else {
            const right = stack.pop();
            const left = stack.pop();

            switch (token) {
            case '+':
                stack.push(left + right);
                break;
            case '-':
                stack.push(left - right);
                break;
            case '*':
                stack.push(left * right);
                break;
            case '/':
                stack.push(Math.trunc(left / right));
                break;
            }
        }
    }

    return stack[0];
};

function peek(stack) {
    return stack[stack.length - 1];
}
