/**
 * @param  {number[][]} matrix
 * @param  {number}     target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var n = matrix.length;
  var m = matrix[0].length;

  if (target < matrix[0][0] || target > matrix[n-1][m-1]) {
    return false;
  }

  var row = 0;
  var col = m - 1;

  while (col >= 0 && row < n) {
    if (matrix[row][col] < target) {
      row += 1;
    } else if (matrix[row][col] > target) {
      col -= 1;
    } else {
      return true;
    }
  }

  return false;
};

console.log(searchMatrix([[-1,3]], 1));
