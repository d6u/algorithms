/**
 * @param  {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var sums = [];
  var i;
  var j;

  sums[0] = [grid[0][0]];

  for (i = 1; i < grid.length; i++) {
    sums[i] = [sums[i-1][0] + grid[i][0]];
  }

  for (j = 1; j < grid[0].length; j++) {
    sums[0][j] = sums[0][j-1] + grid[0][j];
  }

  for (i = 1; i < grid.length; i++) {
    for (j = 1; j < grid[i].length; j++) {
      sums[i][j] = grid[i][j] + Math.min(sums[i-1][j], sums[i][j-1]);
    }
  }

  return sums[i-1][j-1];
};
