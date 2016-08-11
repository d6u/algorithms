'use strict';

function maxSumIslands(matrix) {
    let clone = matrix.map(r => r.slice(0));
    const sums = [0];
    let i = 0;
    let max = -Infinity;

    for (let x = 0; x < matrix.length; x += 1) {
        for (let y = 0; y < matrix[0].length; y += 1) {
            if (matrix[x][y] > 0) {
                i += 1;
                const val = merge(matrix, clone, x, y, i);
                sums.push(val);
                max = Math.max(max, val);
            }
        }
    }

    for (let x = 0; x < clone.length; x += 1) {
        for (let y = 0; y < clone[0].length; y += 1) {
            if (clone[x][y] < 0) {
                const val = getSum(clone, x, y, sums);

                if (val > max) {
                    i += 1;
                    max = val;
                    sums.push(max);
                    unite(clone, x, y, i);
                }
            }
        }
    }

    return max;
}

const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

function merge(matrix, clone, x, y, i) {
    let val = matrix[x][y];
    matrix[x][y] = 0;
    clone[x][y] = i;
    for (const D of DIRECTIONS) {
        const x1 = x + D[0];
        const y1 = y + D[1];
        if (x1 >= 0 && x1 < matrix.length && y1 >= 0 && y1 < matrix[0].length && matrix[x1][y1] > 0) {
            val += merge(matrix, clone, x1, y1, i);
        }
    }
    return val;
}

function getSum(matrix, x, y, sums) {
    const IDs = [];
    for (const D of DIRECTIONS) {
        const x1 = x + D[0];
        const y1 = y + D[1];
        if (x1 >= 0 && x1 < matrix.length && y1 >= 0 && y1 < matrix[0].length && matrix[x1][y1] > 0 && IDs.indexOf(matrix[x1][y1]) === -1) {
            IDs.push(matrix[x1][y1]);
        }
    }
    return IDs.reduce((sum, ID) => sum + sums[ID], matrix[x][y]);
}

function unite(matrix, x, y, i) {
    matrix[x][y] = i;
    for (const D of DIRECTIONS) {
        const x1 = x + D[0];
        const y1 = y + D[1];
        if (x1 >= 0 && x1 < matrix.length && y1 >= 0 && y1 < matrix[0].length && matrix[x1][y1] > 0 && matrix[x1][y1] !== i) {
            unite(matrix, x1, y1, i);
        }
    }
}

console.log(maxSumIslands([
    [1, 2, 3],
    [0,-1, -5],
    [0, 1, 2],
]))
