/**
 * @param  {string} num1
 * @param  {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  var _num1 = num1.split('').reverse();
  var _num2 = num2.split('').reverse();

  var results = Array(num1.length + num2.length);
  var i;
  var j;
  var carry;
  var n;

  for (i = 0; i < results.length; i++) {
    results[i] = '0';
  }

  for (j = 0; j < _num2.length; j++) {
    carry = 0;
    n = parseInt(_num2[j]);
    for (i = 0; i < _num1.length; i++) {
      carry += (parseInt(_num1[i]) * n + parseInt(results[i+j]));
      results[i+j] = String(carry % 10);
      carry = Math.floor(carry / 10);
    }
    if (carry !== 0) {
      results[_num1.length + j] = String(carry);
    }
  }

  results.reverse();

  var count = 0;
  while (count < results.length - 1 && results[count] === '0') {
    count += 1;
  }

  return results.slice(count).join('');
};
