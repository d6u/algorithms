/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var stack = [];
  var i;
  var c;
  var calcArr;
  var top;
  for (i = 0; i < s.length; i += 1) {
    c = s[i];
    if (c === ' ') continue;
    if (c === ')') {
      calcArr = [];
      while (stack.length) {
        top = stack.pop();
        if (top === '(') break;
        calcArr.unshift(top);
      }
      stack.push(calcExp(calcArr));
      continue;
    }
    stack.push(c);
  }
  return calcExp(stack);
};

function calcExp(arr) {
  var result = 0;
  var operator = '+';
  var n = 0;
  var c;
  while (arr.length) {
    c = arr.shift();
    if (c !== '+' && c !== '-') {
      n = n * 10 + parseInt(c, 10);
    }
    else {
      result = calc(result, n, operator);
      operator = c;
      n = 0;
    }
  }
  return calc(result, n, operator);
}

function calc(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return null;
  }
}

console.log(calculate(" 2-1 + 2 "));
