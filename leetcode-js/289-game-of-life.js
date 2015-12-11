/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var m = board.length;
    var n = m ? board[0].length : 0;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var count = -board[i][j];
            for (var I = Math.max(i-1, 0); I < Math.min(i+2, m); I++) {
                for (var J = Math.max(j-1, 0); J < Math.min(j+2, n); J++) {
                    count += board[I][J] & 1;
                }
            }
            if ((count | board[i][j]) === 3) {
                board[i][j] |= 2;
            }
        }
    }

    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            board[i][j] >>= 1;
        }
    }
};
