/**
 * @param  {number[][]} matrix
 * @return {void}       Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var l = matrix.length;

  var y;
  var x;
  var t;

  for (y = 0; y < l - 1; y++) {
    for (x = 0; x < l - y; x++) {
      t = matrix[y][x];
      matrix[y][x] = matrix[l - x - 1][l - y - 1];
      matrix[l - x - 1][l - y - 1] = t;
    }
  }

  for (y = 0; y < l / 2 | 0; y++) {
    for (x = 0; x < l; x++) {
      t = matrix[y][x];
      matrix[y][x] = matrix[l - y - 1][x];
      matrix[l - y - 1][x] = t;
    }
  }
};
