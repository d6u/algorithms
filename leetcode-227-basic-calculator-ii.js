/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var stack = [];
  var operator = '+';
  var n = 0;
  var i;
  var c;
  var int;
  var tmp;

  for (i = 0; i <= s.length; i += 1) {
    c = s[i];
    int = parseInt(c, 10);
    if (!isNaN(int)) {
      n = n * 10 + int;
    }
    else if (c !== ' ') {
      if (operator === '-') {
        n = -n;
      }
      else if (operator === '*' || operator === '/') {
        tmp = stack.pop();
        n = calc(tmp, n, operator);
      }
      stack.push(n);
      n = 0;
      operator = c;
    }
  }

  return stack.reduce(function (sum, x) {
    return sum + x;
  }, 0);
};

function calc(a, b, operator) {
  switch (operator) {
    case '*':
      return a * b;
    case '/':
      return a / b | 0;
    default:
      return null;
  }
}
