/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var lx = obstacleGrid[0].length;
  var ly = obstacleGrid.length;
  var arr = makeArray(lx, ly);
  var x;
  var y;

  arr[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;

  for (x = 1; x < lx; x++) {
    if (obstacleGrid[0][x] !== 1) {
      arr[0][x] = arr[0][x-1];
    }
  }

  for (y = 1; y < ly; y++) {
    if (obstacleGrid[y][0] !== 1) {
      arr[y][0] = arr[y-1][0];
    }
  }

  for (y = 1; y < ly; y++) {
    for (x = 1; x < lx; x++) {
      if (obstacleGrid[y][x] !== 1) {
        arr[y][x] = arr[y-1][x] + arr[y][x-1];
      }
    }
  }

  return arr[ly-1][lx-1];
};

function makeArray(x, y) {
  var arr = [];
  for (var i = 0; i < y; i++) {
    arr[i] = [];
    for (var j = 0; j < x; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}
