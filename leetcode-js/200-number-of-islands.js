/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || !grid.length || !grid[0].length) {
        return 0;
    }

    let count = 0;

    for (let y = 0; y < grid.length; y += 1) {
        for (let x = 0; x < grid[0].length; x += 1) {
            if (grid[y][x] === '1') {
                count += 1;
                // Set all connected islands to 0
                merge(grid, x, y);
            }
        }
    }

    return count;
};

function merge(grid, x, y) {
    if (grid[y] == null || grid[y][x] == null || grid[y][x] === '0') {
        return;
    }

    grid[y][x] = '0';

    merge(grid, x - 1, y);
    merge(grid, x + 1, y);
    merge(grid, x, y - 1);
    merge(grid, x, y + 1);
}
