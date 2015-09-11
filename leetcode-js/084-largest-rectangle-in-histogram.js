/**
 * @param  {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
  if (!height || !height.length) {
    return 0;
  }

  var stack = [];
  var max = 0;
  var i = 0;
  var top;
  var h;
  var w;

  while (i < height.length) {
    if (!stack.length || height[i] >= height[peek(stack)]) {
      stack.push(i);
      i += 1;
    } else {
      top = stack.pop();
      h = height[top];
      w = stack.length ? i - peek(stack) - 1: i;
      max = Math.max(max, h * w);
    }
  }

  while (stack.length) {
    top = stack.pop();
    h = height[top];
    w = stack.length ? i - peek(stack) - 1 : i;
    max = Math.max(max, h * w);
  }

  return max;
};

function peek(stack) {
  return stack[stack.length - 1];
}

console.log(largestRectangleArea([0]));
