/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const cells = Array(9).fill().map(() => Array(9).fill().map(() => new Cell()));

    for (let i = 0; i < 9; i += 1) {
        for (let j = 0; j < 9; j += 1) {
            if (board[i][j] !== '.' && !set(i, j, board[i][j], cells)) {
                return;
            }
        }
    }

    // Keep a reference of cells due to lack of pointer type in JavaScript
    const ctx = {cells};

    if (!findValuesForEmptyCells(ctx)) {
        return;
    }

    for (let i = 0; i < 9; i += 1) {
        for (let j = 0; j < 9; j += 1) {
            if (ctx.cells[i][j].value !== '0') {
                board[i][j] = ctx.cells[i][j].value;
            }
        }
    }
};

/**
 * @param {number} i Row index
 * @param {number} j Column index
 * @param {string} v Value of the cell
 * @param {Cell[][]} cells
 *
 * @return {boolean} false means the value is invalid on provided position
 */
function set(i, j, v, cells) {
    const c = cells[i][j];

    if (c.value === v) {
        return true;
    }
    if (c.constraints[v]) {
        return false;
    }

    c.constraints = Array(10).fill(true);
    c.constraints[v] = false;
    c.numPossibilities = 1;
    c.value = v;

    for (let k = 0; k < 9; k += 1) {
        // propagate to column
        if (i !== k && !updateConstraints(k, j, v, cells)) {
            return false;
        }

        // propagate to row
        if (j !== k && !updateConstraints(i, k, v, cells)) {
            return false;
        }

        // propagate to 3x3 square
        const ix = Math.floor(i / 3) * 3 + Math.floor(k / 3);
        const jx = Math.floor(j / 3) * 3 + k % 3;
        if (ix !== i && jx !== j && !updateConstraints(ix, jx, v, cells)) {
            return false;
        }
    }

    return true;
}

/**
 * @param  {number} i Row index
 * @param  {number} j Column index
 * @param  {string} excludedValue The value has been used
 * @param  {Cell[][]} cells
 *
 * @return {boolean} false means the excludedValue is not valid on that position
 */
function updateConstraints(i, j, excludedValue, cells) {
    const c = cells[i][j];
    if (c.constraints[excludedValue]) {
        return true;
    }
    if (c.value === excludedValue) {
        return false;
    }
    c.constraints[excludedValue] = true;
    c.numPossibilities -= 1;
    if (c.numPossibilities > 1) {
        return true;
    }

    // There is only one possibility for current cell, so propagate to other cells
    for (let v = 1; v <= 9; v += 1) {
        if (!c.constraints[v]) {
            return set(i, j, v.toString(), cells);
        }
    }
}

function findValuesForEmptyCells(ctx) {
    const bt = [];
    for (let i = 0; i < 9; i += 1) {
        for (let j = 0; j < 9; j += 1) {
            if (ctx.cells[i][j].value === '0') {
                bt.push([i, j]);
            }
        }
    }

    // Solve low possibility cells first
    bt.sort((a, b) => ctx.cells[a[0]][a[1]].numPossibilities - ctx.cells[b[0]][b[1]].numPossibilities);

    return backtrack(0, ctx, bt);
}

function backtrack(k, ctx, bt) {
    if (k >= bt.length) {
        return true;
    }
    const [i, j] = bt[k];

    // only 1 possibility
    if (ctx.cells[i][j].value !== '0') {
        return backtrack(k + 1, ctx, bt);
    }

    // more than 1 possibility
    const constraints = ctx.cells[i][j].constraints.slice();

    // make a copy for easy restore
    // it might be faster than restore in place
    const snapshot = clone(ctx.cells);

    for (let v = 1; v <= 9; v += 1) {
        if (!constraints[v]) {
            if (set(i, j, v.toString(), ctx.cells)) {
                if (backtrack(k + 1, ctx, bt)) {
                    return true;
                }
            }
            ctx.cells = clone(snapshot);
        }
    }

    return false;
}

function clone(cells) {
    return cells.map(row => row.map(c => {
        const newCell = new Cell();
        newCell.value = c.value;
        newCell.numPossibilities = c.numPossibilities;
        newCell.constraints = c.constraints.slice();
        return newCell;
    }));
}

class Cell {
    constructor() {
        this.value = '0';
        this.numPossibilities = 9;

        // true means the number (index inside the array) is used
        this.constraints = Array(10).fill(false);
    }
}


const board1 = [
    "...2...63",
    "3....54.1",
    "..1..398.",
    ".......9.",
    "...538...",
    ".3.......",
    ".263..5..",
    "5.37....8",
    "47...1..."
].map(row => row.split(''));
solveSudoku(board1);
console.log(board1);

const board2 = [
    "..9748...",
    "7........",
    ".2.1.9...",
    "..7...24.",
    ".64.1.59.",
    ".98...3..",
    "...8.3.2.",
    "........6",
    "...2759.."
].map(row => row.split(''));
solveSudoku(board2);
console.log(board2);
