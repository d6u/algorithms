/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if (board.length < 9 || board[0].length < 9) {
        return;
    }
    solSudoku(board, 0, 0);
};

function solSudoku(board, irow, icol) {
    'use strict';

    if (irow === 9) {
        return true;
    }

    let irow2;
    let icol2;

    if (icol === 8) {
        irow2 = irow + 1;
        icol2 = 0;
    } else {
        irow2 = irow;
        icol2 = icol + 1;
    }

    if (board[irow][icol] !== '.') {
        if (!isValid(board, irow, icol)) {
            return false;
        }
        return solSudoku(board, irow2, icol2);
    }

    for (let i = 1; i <= 9; i++) {
        board[irow][icol] = '0' + i;
        if (isValid(board, irow, icol) && solSudoku(board, irow2, icol2)) {
            return true;
        }
    }

    board[irow][icol] = '.';
    return false;
}

function isValid(board, irow, icol) {
    'use strict';

    let val = board[irow][icol];

    if (val - '0' < 1 || val - '0' > 9) {
        return false;
    }

    for (let i = 0; i < 9; i++) {
        if (board[irow][i] === val && i !== icol) {
            return false;
        }
        if (board[i][icol] === val && i !== irow) {
            return false;
        }

        let irow0 = Math.floor(irow / 3) * 3;
        let icol0 = Math.floor(icol / 3) * 3;

        for (let i = irow0; i < irow0 + 3; i++) {
            for (let j = icol0; i < icol0 + 3; j++) {
                if (board[i][j] === val && (i !== irow || j !== icol)) {
                    return false;
                }
            }
        }
    }

    return true;
}
