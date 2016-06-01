/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    'use strict';

    const cols = [0,0,0,0,0,0,0,0,0];
    const rows = [0,0,0,0,0,0,0,0,0];
    const boxs = [0,0,0,0,0,0,0,0,0];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                let temp = 1 << board[i][j];

                if (rows[i] & temp) {
                    return false;
                } else {
                    rows[i] |= temp;
                }

                if (cols[j] & temp) {
                    return false;
                } else {
                    cols[j] |= temp;
                }

                if (boxs[i - (i % 3) + Math.floor(j / 3)] & temp) {
                    return false;
                } else {
                    boxs[i - (i % 3) + Math.floor(j / 3)] |= temp;
                }
            }
        }
    }

    return true;
};

console.log(isValidSudoku([".87654321","2........","3........","4........","5........","6........","7........","8........","9........"]));
