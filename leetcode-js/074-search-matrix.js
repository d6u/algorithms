/**
 * @param  {number[][]} matrix
 * @param  {number}     target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  var y = matrix.length - 1;
  var x = 0;

  while (y >= 0 && x < matrix[0].length) {
    if (target < matrix[y][x]) {
      y -= 1;
    }
    else if (target > matrix[y][x]) {
      x += 1
    }
    else {
      return true;
    }
  }

  return false;
};
