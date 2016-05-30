/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    'use strict';

    const dp = [];

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
    'use strict';

    const stack = [];
    let max = 0;

    let i = 0;

    while (i < heights.length) {
        if (!stack.length || heights[i] >= heights[stack[stack.length - 1]]) {
            stack.push(i);
            i += 1;
        } else {
            const index = stack.pop();
            const h = heights[index];
            const w = stack.length ? i - stack[stack.length - 1] - 1 : i;
            max = Math.max(max, w * h);
        }
    }


    while (stack.length) {
        const index = stack.pop();
        const h = heights[index];
        const w = stack.length ? i - stack[stack.length - 1] - 1 : i;
        max = Math.max(max, w * h);
    }

    return max;
}

// console.log(maximalRectangle(["1101","1101","1111"]));
console.log(largestRectangleArea([3,3,1,3]));
