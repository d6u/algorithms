/**
 * @param  {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var stack = [];
  var result = 0;
  var i;
  var c;
  var len;

  for (i = 0; i < s.length; i++) {
    c = s[i];
    if (c === '(') {
      stack.push([i, 0]);
    } else {
      if (!stack.length || peek(stack)[1] === 1) {
        stack.push([i, 1]);
      } else {
        stack.pop();
        len = 0;
        if (!stack.length) {
          len = i + 1;
        } else {
          len = i - peek(stack)[0];
        }
        result = Math.max(len, result);
      }
    }
  }

  return result;
};

function peek(arr) {
  return arr[arr.length - 1];
}
