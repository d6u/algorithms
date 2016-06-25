/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    return solve(0, 0, n, new Set(), new Set(), new Set());
};

function solve(row, count, n, occupiedCols, occupiedDiag1s, occupiedDiag2s) {
    for (let col = 0; col < n; col += 1) {
        if (occupiedCols.has(col)) {
            continue;
        }
        const diag1 = row - col;
        if (occupiedDiag1s.has(diag1)) {
            continue;
        }
        const diag2 = row + col;
        if (occupiedDiag2s.has(diag2)) {
            continue;
        }
        if (row === n - 1) {
            count += 1;
        } else {
            occupiedCols.add(col);
            occupiedDiag1s.add(diag1);
            occupiedDiag2s.add(diag2);
            count = solve(row + 1, count, n, occupiedCols, occupiedDiag1s, occupiedDiag2s);
            occupiedCols.delete(col);
            occupiedDiag1s.delete(diag1);
            occupiedDiag2s.delete(diag2);
        }
    }

    return count;
}
