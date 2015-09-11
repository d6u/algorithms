/**
 * @param  {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  var ly = dungeon.length;
  var lx = dungeon[0].length;
  var h = makeArray(dungeon.length, () => makeArray(dungeon[0].length, 0));
  var y;
  var x;

  h[ly-1][lx-1] = Math.max(1, 1 - dungeon[ly-1][lx-1]);

  for (y = ly - 2; y >= 0; y--) {
    h[y][lx-1] = Math.max(h[y+1][lx-1] - dungeon[y][lx-1], 1);
  }

  for (x = lx - 2; x >= 0; x--) {
    h[ly-1][x] = Math.max(h[ly-1][x+1] - dungeon[ly-1][x], 1);
  }

  var down;
  var right;

  for (y = ly - 2; y >= 0; y--) {
    for (x = lx - 2; x >= 0; x--) {
      down = Math.max(h[y+1][x] - dungeon[y][x], 1);
      right = Math.max(h[y][x+1] - dungeon[y][x], 1);
      h[y][x] = Math.min(down, right);
    }
  }

  return h[0][0];
};

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}
