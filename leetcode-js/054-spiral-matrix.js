/**
 * @param  {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var res = [];

  if (!matrix.length || !matrix[0].length) {
    return res;
  }

  var rowBegin = 0;
  var rowEnd = matrix.length - 1;
  var colBegin = 0;
  var colEnd = matrix[0].length - 1;
  var j;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (j = colBegin; j <= colEnd; j++) {
      res.push(matrix[rowBegin][j]);
    }
    rowBegin += 1;

    for (j = rowBegin; j <= rowEnd; j++) {
      res.push(matrix[j][colEnd]);
    }
    colEnd -= 1;

    if (rowBegin <= rowEnd) {
      for (j = colEnd; j >= colBegin; j--) {
        res.push(matrix[rowEnd][j]);
      }
    }
    rowEnd -= 1;

    if (colBegin <= colEnd) {
      for (j = rowEnd; j >= rowBegin; j--) {
        res.push(matrix[j][colBegin]);
      }
    }
    colBegin += 1;
  }

  return res;
};
