/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
    let result = 0;
    let rowHits = 0;
    const colHits = Array(grid[0].length).fill(0);

    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[0].length; j += 1) {
            if (!j || grid[i][j-1] === 'W') {
                rowHits = 0;
                for (let k = j; k < grid[0].length && grid[i][k] !== 'W'; k += 1) {
                    rowHits += grid[i][k] === 'E' ? 1 : 0;
                }
            }
            if (!i || grid[i-1][j] === 'W') {
                colHits[j] = 0;
                for (let k = i; k < grid.length && grid[k][j] !== 'W'; k += 1) {
                    colHits[j] += grid[k][j] === 'E' ? 1 : 0;
                }
            }
            if (grid[i][j] === '0') {
                result = Math.max(result, rowHits + colHits[j]);
            }
        }
    }

    return result;
};
