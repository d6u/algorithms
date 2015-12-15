/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var cols = [0,0,0,0,0,0,0,0,0];
    var rows = [0,0,0,0,0,0,0,0,0];
    var boxs = [0,0,0,0,0,0,0,0,0];

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                var temp = 1 << board[i][j];

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
