'use strict';

function bitFlip(arr) {
  var l = arr.length;
  var count = arr.reduce(function (count, n) {
    return count + (n === 1 ? 1 : 0);
  });
  var temp = 0;
  var res = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      temp += 1;
    } else {
      temp -= 1;
    }
    temp = Math.max(0, temp);
    res = Math.max(res, temp);
  }

  return count + res;
}
