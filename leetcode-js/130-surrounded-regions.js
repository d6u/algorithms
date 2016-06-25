/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board) {
        return;
    }

    const rowL = board.length;

    if (rowL <= 1) {
        return;
    }

    const columnL = board[0].length;

    // visit borders
    for (let i = 0; i < rowL; i++) {
        visit(board, i, 0, rowL, columnL);
        visit(board, i, columnL - 1, rowL, columnL);
    }

    // visit borders
    for (let i = 1; i < columnL - 1; i++) {
        visit(board, 0, i, rowL, columnL);
        visit(board, rowL - 1, i, rowL, columnL);
    }

    // flip all 'O' to 'X' and flip all 'Y' to 'O'
    for (let i = 0; i < rowL; i++) {
        for (let j = 0; j <columnL; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'Y') {
                board[i][j] = 'O';
            }
        }
    }
};

// flip connected 0 to 'Y'
function visit(board, i, j, rowL, columnL) {
    if (i < 0 || j < 0 || i >= rowL || j >= columnL || board[i][j] !== 'O') {
        return;
    }

    const queue = [];

    board[i][j] = 'Y';
    queue.push(i * columnL + j);

    while(queue.length > 0) {
        const cur = queue.pop();
        const row = Math.floor(cur / columnL);
        const column = cur % columnL;

        if (row > 0 && board[row - 1][column] === 'O') {
            queue.push((row - 1)*columnL + column);
            board[row - 1][column] = 'Y';
        }

        if (row < rowL -1 && board[row + 1][column] === 'O') {
            queue.push((row + 1)*columnL + column);
            board[row + 1][column] = 'Y';
        }

        if (column > 0 && board[row][column - 1] === 'O') {
            queue.push(row * columnL + column - 1);
            board[row][column - 1] = 'Y';
        }

        if (column < columnL - 1 && board[row][column + 1] === 'O') {
            queue.push(row * columnL + column + 1);
            board[row][column + 1] = 'Y';
        }
    }
}
