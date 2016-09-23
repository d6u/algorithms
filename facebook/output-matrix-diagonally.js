'use strict';

function outputMatrixDiagonally(matrix) {
    const res = [];

    for (let i = 0; i < matrix.length; i++) {
        const level = [];
        let row = i;
        let col = 0;
        while (row >= 0 && col < matrix[0].length) {
            level.push(matrix[row][col]);
            row--;
            col++;
        }
        res.push(level);
    }

    for (let i = 1; i < matrix[0].length; i++) {
        const level = [];
        let row = matrix.length - 1;
        let col = i;
        while (row >= 0 && col < matrix[0].length) {
            level.push(matrix[row][col]);
            row--;
            col++;
        }
        res.push(level);
    }

    return res;
}

console.log(outputMatrixDiagonally([
    [1,2,3],
    [4,5,6],
    [7,8,9],
]))

console.log(outputMatrixDiagonally([
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
]))

console.log(outputMatrixDiagonally([
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3],
]))
