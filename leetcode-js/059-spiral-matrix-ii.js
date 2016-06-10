/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n === 0) {
        return [];
    }

    const result = [];

    for (let y = 0; y < n; y += 1) {
        result[y] = [];
        for (let x = 0; x < n; x += 1) {
            result[y][x] = 0;
        }
    }

    result[0][0] = 1;

    let i = 2;
    let y = 0;
    let x = 0;

    while (i <= n * n) {
        while (x < n - 1 && result[y][x+1] === 0) {
            x += 1;
            result[y][x] = i;
            i += 1;
        }
        while (y < n - 1 && result[y+1][x] === 0) {
            y += 1;
            result[y][x] = i;
            i += 1;
        }
        while (x > 0 && result[y][x-1] === 0) {
            x -= 1;
            result[y][x] = i;
            i += 1;
        }
        while (y > 0 && result[y-1][x] === 0) {
            y -= 1;
            result[y][x] = i;
            i += 1;
        }
    }

    return result;
};
