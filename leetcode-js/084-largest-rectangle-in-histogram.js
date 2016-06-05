/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    const stack = [];
    let result = 0;

    for (let i = 0; i < heights.length; i += 1) {
        if (!stack.length || heights[i] > heights[stack[stack.length-1]]) {
            stack.push(i);
        } else {
            const tmp = stack.pop();
            result = Math.max(
                result,
                heights[tmp] * (stack.length ? i - stack[stack.length-1] - 1 : i)
            );
            i -= 1;
        }
    }

    return result;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));
