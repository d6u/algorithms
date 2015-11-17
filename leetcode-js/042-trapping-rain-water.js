/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    'use strict';

    let n = height.length;

    if (n < 3) return 0;

    let stack = [];
    stack.push(0);

    let water = 0;

    for (let i = 1; i < n; i++) {
        if (height[i] > height[top(stack)]) {
            let bottom = height[top(stack)];
            stack.pop();
            while (stack.length !== 0 && height[i] >= height[top(stack)]) {
                water += (height[top(stack)] - bottom) * (i - top(stack) - 1);
                bottom = height[top(stack)];
                stack.pop();
            }
            if (stack.length !== 0) {
                water += (height[i] - bottom) * (i - top(stack) - 1);
            }
        }
        stack.push(i);
    }

    return water;
};

function top(stack) {
    return stack[stack.length-1];
}
