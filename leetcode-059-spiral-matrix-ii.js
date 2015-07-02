/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 0) return [];

  var r = [];
  var x;
  var y;
  var i;

  for (y = 0; y < n; y++) {
    r[y] = [];
    for (x = 0; x < n; x++) {
      r[y][x] = 0;
    }
  }

  r[0][0] = 1;
  x = 0;
  y = 0;
  i = 2;

  while (i <= n * n) {
    while (x < n - 1 && r[y][x+1] === 0) {
      x += 1;
      r[y][x] = i;
      i += 1;
    }
    while (y < n - 1 && r[y+1][x] === 0) {
      y += 1;
      r[y][x] = i;
      i += 1;
    }
    while (x > 0 && r[y][x-1] === 0) {
      x -= 1;
      r[y][x] = i;
      i += 1;
    }
    while (y > 1 && r[y-1][x] === 0) {
      y -= 1;
      r[y][x] = i;
      i += 1;
    }
  }

  return r;
};
