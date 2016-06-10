/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    for (let y = 0; y < board.length; y += 1) {
        for (let x = 0; x < board[0].length; x += 1) {
            let count = -board[y][x];
            for (let y1 = Math.max(0, y-1); y1 < Math.min(board.length, y+2); y1 += 1) {
                for (let x1 = Math.max(0, x-1); x1 < Math.min(board[0].length, x+2); x1 += 1) {
                    count += board[y1][x1] & 0b1;
                }
            }
            if ((count | board[y][x]) === 0b11) {
                board[y][x] |= 0b10;
            }
        }
    }

    for (let y = 0; y < board.length; y += 1) {
        for (let x = 0; x < board[0].length; x += 1) {
            board[y][x] >>= 1;
        }
    }
};
