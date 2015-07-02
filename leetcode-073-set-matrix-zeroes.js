/**
 * @param  {number[][]} matrix
 * @return {void}       Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var isFirstRowZero = false;
  var isFirstColZero = false;

  for (var j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      isFirstRowZero = true;
      break;
    }
  }

  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      isFirstColZero = true;
      break;
    }
  }

  for (i = 1; i < matrix.length; i++) {
    for (j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (i = 1; i < matrix.length; i++) {
    for (j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (isFirstRowZero) {
    for (j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isFirstColZero) {
    for (i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};
