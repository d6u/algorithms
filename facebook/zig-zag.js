'use strict';

function zigZag(matrix) {
    const res = [];
    let row = 0;
    let delta;
    for (let i = 0; i < matrix[0].length; i++) {
        res.push(matrix[row][i]);
        if (row === 0) {
            delta = 1;
        } else if (row === matrix.length - 1) {
            delta = -1;
        }
        row += delta;
    }
    return res;
}

const input = [
  'IBCALKA',
  'DRFCAEA',
  'GHOELAD'
];

console.log(zigZag(input));
