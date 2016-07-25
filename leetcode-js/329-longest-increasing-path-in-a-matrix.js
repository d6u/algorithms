/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix.length) {
        return 0;
    }
    const cache = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));
    let max = 1;
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[0].length; j += 1) {
            const len = dfs(matrix, i, j, matrix.length, matrix[0].length, cache);
            max = Math.max(max, len);
        }
    }
    return max;
};

const DIRS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

function dfs(matrix, i, j, m, n, cache) {
    if (cache[i][j] !== 0) {
        return cache[i][j];
    }
    let max = 1;
    for (const dir of DIRS) {
        const x = i + dir[0];
        const y = j + dir[1];
        if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) {
            continue;
        }
        const len = 1 + dfs(matrix, x, y, m, n, cache);
        max = Math.max(max, len);
    }
    cache[i][j] = max;
    return max;
}

console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]));
