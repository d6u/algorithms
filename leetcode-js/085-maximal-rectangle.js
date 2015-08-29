/**
 * @param  {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return 0;
  }

  var ly = matrix.length;
  var lx = matrix[0].length;
  var heights = makeArray(ly, () => makeArray(lx, 0));
  var x;
  var y;

  for (y = 0; y < ly; y++) {
    for (x = 0; x < lx; x++) {
      if (matrix[y][x] === '0') {
        heights[y][x] = 0;
      } else {
        heights[y][x] = y === 0 ? 1 : heights[y-1][x] + 1;
      }
    }
  }

  var max = 0;
  var i;
  for (i = 0; i < heights.length; i++) {
    max = Math.max(max, largestRectangleArea(heights[i]));
  }

  return max;
};

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}

function largestRectangleArea(height) {
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
}

function peek(stack) {
  return stack[stack.length - 1];
}

console.log(maximalRectangle(["1"]));
