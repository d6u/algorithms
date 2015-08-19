/**
 * @param  {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var r = [];

  if (!matrix.length || !matrix[0].length) {
    return r;
  }

  var m = matrix.length;
  var n = matrix[0].length;
  var lv = (Math.min(m, n) + 1) >> 1;
  var i;
  var j;
  var lastR;
  var lastC;

  for (i = 0; i < lv; i++) {
    lastR = m - 1 - i;
    lastC = n - 1 - i;

    if (lastR === i) {
      for (j = i; j <= lastC; j++) {
        r.push(matrix[i][j]);
      }
    }
    else if (lastC === i) {
      for (j = i; j <= lastR; j++) {
        r.push(matrix[j][i]);
      }
    }
    else {
      for (j = i; j < lastC; j++) {
        r.push(matrix[i][j]);
      }

      for (j = i; j < lastR; j++) {
        r.push(matrix[j][lastC]);
      }

      for (j = lastC; j > i; j--) {
        r.push(matrix[lastR][j]);
      }

      for (j = lastR; j > i; j--) {
        r.push(matrix[j][i]);
      }
    }
  }

  return r;
};
