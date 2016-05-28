/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    'use strict';

    let low = Number.MIN_VALUE;
    const stack = [];

    for (const node of preorder) {
        if (node < low) {
            return false;
        }

        while (stack.length && node > stack[stack.length - 1]) {
            low = stack.pop();
        }

        stack.push(node);
    }

    return true;
};
