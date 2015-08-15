/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || !grid.length || !grid[0].length) return 0;
  var count = 0;
  var xl = grid[0].length;
  var yl = grid.length;
  var x;
  var y;

  for (y = 0; y < yl; y++) {
    for (x = 0; x < xl; x++) {
      if (grid[y][x] === '1') {
        count += 1;
        merge(grid, x, y, xl, yl);
      }
    }
  }

  return count;
};

function merge(grid, x, y, xl, yl) {
  if (grid[y] == null || grid[y][x] == null || grid[y][x] === '0') return;

  grid[y][x] = '0';

  merge(grid, x + 1, y, xl, yl);
  merge(grid, x, y + 1, xl, yl);
  merge(grid, x - 1, y, xl, yl);
  merge(grid, x, y - 1, xl, yl);
}
