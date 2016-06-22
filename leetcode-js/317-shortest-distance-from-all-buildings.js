const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    const dist = Array(grid.length).fill().map(() => Array(grid[0].length).fill(0));
    let start = 1;
    let min;
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[0].length; j += 1) {
            if (grid[i][j] === 1) {
                start -= 1;
                min = bfsVisit(grid, dist, i, j, start);
            }
        }
    }
    return min === Infinity ? -1 : min;
};

function bfsVisit(grid, dist, row, col, start) {
    const queue = [];
    queue.push([row, col]);
    let level = 0;
    let min = Infinity;
    while (queue.length) {
        const size = queue.length;
        level += 1;
        for (let k = 0; k < size; k += 1) {
            const node = queue.shift();
            for (const dir of dirs) {
                let newRow = node[0] + dir[0];
                let newCol = node[1] + dir[1];
                if (newRow >= 0 && newRow < grid.length &&
                    newCol >= 0 && newCol < grid[0].length &&
                    grid[newRow][newCol] === start) {

                    queue.push([newRow, newCol]);
                    dist[newRow][newCol] += level;
                    min = Math.min(min, dist[newRow][newCol]);
                    grid[newRow][newCol] -= 1;
                }
            }
        }
    }
    return min;
}

console.log(shortestDistance([[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]))
