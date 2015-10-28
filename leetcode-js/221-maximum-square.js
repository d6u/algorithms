/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var h = matrix.length;
    if (h === 0) return 0;
    var w = matrix[0].length;
    if (w === 0) return 0;
    var dp = makeArray(h, () => makeArray(w, 0));
    var x;
    var y;
    var l = 0;

    for (y = 0; y < h; y++) {
        for (x = 0; x < w; x++) {
            dp[y][x] = parseInt(matrix[y][x]);
            if (x && y && dp[y][x]) {
                dp[y][x] = Math.min(dp[y-1][x], dp[y][x-1], dp[y-1][x-1]) + 1;
            }
            l = Math.max(dp[y][x], l);
        }
    }

    return l * l;
};

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}
