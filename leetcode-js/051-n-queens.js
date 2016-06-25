/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const flag = Array(5*n-2).fill(true);

    const queens = [];
    for (let i = 0; i < n; i += 1) {
        queens[i] = [];
        for (let j = 0; j < n; j += 1) {
            queens[i][j] = '.';
        }
    }

    solve(queens, flag, 0, n, result);

    return result;
};

function solve(queens, flag, row, n, result) {
    if (row === n) {
        result.push(queens.slice().map(row => row.join('')));
        return;
    }

    for (let col = 0; col !== n; col += 1) {
        if (flag[col] && flag[n+row+col] && flag[4*n-2+col-row]) {
            flag[col] = flag[n+row+col] = flag[4*n-2+col-row] = false;
            queens[row][col] = 'Q';
            solve(queens, flag, row + 1, n, result);
            queens[row][col] = '.';
            flag[col] = flag[n+row+col] = flag[4*n-2+col-row] = true;
        }
    }
}
