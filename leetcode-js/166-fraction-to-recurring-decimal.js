/**
 * @param  {number} numerator
 * @param  {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  var isNegative = numerator * denominator < 0;
  var remainders = {};
  var results = [];
  var remainder;
  var position = -1;
  var counter = 1;

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  while (true) {
    results.push(String(Math.floor(numerator / denominator)));
    remainder = numerator % denominator;
    if (remainder === 0) {
      break;
    }

    if (remainders[remainder] != null) {
      position = remainders[remainder];
      break;
    }

    remainders[remainder] = counter;
    counter += 1;
    numerator = remainder * 10;
  }

  var r;
  var i;

  if (results.length === 1) {
    r = results[0];
  } else {
    r = results[0] + '.';

    for (i = 1; i < results.length; i++) {
      if (position === i) {
        r += '(';
      }
      r += results[i];
    }

    if (position !== -1) {
      r += ')';
    }
  }

  return isNegative ? '-' + r : r;
};

console.log(fractionToDecimal(-2147483648, 1));
