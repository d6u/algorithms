/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if (board.length === 0) return;
    var m = board.length;
    var n = board[0].length;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            check(board,i,j,i+1,j-1);
            check(board,i,j,i+1,j);
            check(board,i,j,i+1,j+1);
            check(board,i,j,i,j+1);
            if (board[i][j] >= 5 && board[i][j] <= 7) {
                board[i][j] = 1;
            } else {
                board[i][j] = 0;
            }
        }
    }
};

function check(board, i, j, a, b) {
    var m = board.length;
    var n = board[0].length;
    if (a >= m || b < 0 || b >= n) return;
    if (board[i][j] % 2 !== 0) board[a][b] += 2;
    if (board[a][b] % 2 !== 0) board[i][j] += 2;
}
