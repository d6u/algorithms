/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const dp = [];

    // 1. Convert this into a finding largest rectangle area within a number of
    // heights problem
    for (let i = 0; i < matrix.length; i += 1) {
        dp[i] = [];
        for (let j = 0; j < matrix[0].length; j += 1) {
            if (i === 0) {
                dp[0][j] = matrix[0][j] === '0' ? 0 : 1;
            } else {
                dp[i][j] = matrix[i][j] === '0' ? 0 : dp[i-1][j] + 1;
            }
        }
    }

    return dp.reduce((max, heights) => Math.max(max, largestRectangleArea(heights)), 0);
};

function largestRectangleArea(heights) {
    const stack = [];
    let max = 0;

    let i = 0;

    while (i < heights.length) {
        if (!stack.length || heights[i] >= heights[peek(stack)]) {
            // 2. Push index into stack if height is higher than top of stack
            stack.push(i);
            i += 1;
        } else {
            // 3. Calculate area between current index and top of stack exclusive
            const index = stack.pop();
            const h = heights[index];
            const w = stack.length ? i - peek(stack) - 1 : i;
            max = Math.max(max, w * h);
        }
    }

    // 4. If there are still elements left in the stack, repeat 3 for the rest
    // of elements
    while (stack.length) {
        const index = stack.pop();
        const h = heights[index];
        const w = stack.length ? i - peek(stack) - 1 : i;
        max = Math.max(max, w * h);
    }

    return max;
}

function peek(stack) {
    return stack[stack.length - 1];
}

// console.log(maximalRectangle(["1101","1101","1111"]));
console.log(largestRectangleArea([3,3,1,3]));
