/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0); // 0 as a signal of end

    const stack = [];
    let result = 0;

    for (let i = 0; i < heights.length; i += 1) {
        if (!stack.length || heights[i] > heights[peek(stack)]) {
            // 1. Push index to the stack if heights are increasing
            stack.push(i);
        } else {
            // 2. If height decreases, remove the top, and compare the
            // area between new stack top
            const tmp = stack.pop();
            const width = stack.length ? i - peek(stack) - 1 : i;
            result = Math.max(result, heights[tmp] * width);
            i -= 1;
        }
    }

    return result;
};

function peek(stack) {
    return stack[stack.length-1];
}

console.log(largestRectangleArea([2,1,5,6,2,3]));
