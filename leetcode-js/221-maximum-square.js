/**
 * @param  {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }

  var y = matrix.length;
  var x = matrix[0].length;
  var dp = Array(y);
  var i;
  for (i = 0; i < dp.length; i++) {
    dp[i] = Array(x);
  }
  var answer = 0;

  for (y = 0; y < dp.length; y++) {
    for (x = 0; x < dp[0].length; x++) {
      dp[y][x] = parseInt(matrix[y][x]);
      if (y && x && dp[y][x]) {
        dp[y][x] = Math.min(dp[y-1][x], dp[y][x-1], dp[y-1][x-1]) + 1;
      }
      answer = Math.max(answer, dp[y][x]);
    }
  }

  return answer * answer;
};
