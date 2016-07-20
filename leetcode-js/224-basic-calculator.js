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
    const opStack = [];

    // 1. Reverse polish notation
    const rpn = [];

    // 2. Split s into numbers and operators
    for (const _p of s.split(/([+\-*/()])/)) {

        const p = _p.trim();

        if (!p) {
            continue;
        }

        // 3. Convert 1 + 1 * 2 to `1,1,2,*,+`

        if (OPERATORS[p]) {
            if (!opStack.length) {
                opStack.push(p);
            } else if (p === '(') {
                opStack.push(p);
            } else if (p === ')') {
                let operator = opStack.pop();
                while (operator !== '(') {
                    rpn.push(operator);
                    operator = opStack.pop();
                }
            } else if (opStack[opStack.length-1] === '(' ||
                OPERATORS[p] > OPERATORS[opStack[opStack.length-1]]) {

                opStack.push(p);
            } else {
                rpn.push(opStack.pop());
                opStack.push(p);
            }
        } else {
            rpn.push(p);
        }
    }

    while (opStack.length) {
        rpn.push(opStack.pop());
    }

    return evalRPN(rpn);
};

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
