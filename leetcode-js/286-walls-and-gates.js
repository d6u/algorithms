const INF = 2147483647;

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const queue = [];

    for (let i = 0; i < rooms.length; i += 1) {
        for (let j = 0; j < rooms[0].length; j += 1) {
            if (rooms[i][j] === 0) {
                queue.push({row: i, col: j});
            }
        }
    }

    while (queue.length) {
        const {row, col} = queue.shift();
        if (row > 0 && rooms[row - 1][col] === INF) {
            rooms[row - 1][col] = rooms[row][col] + 1;
            queue.push({row: row - 1, col});
        }
        if (row < rooms.length - 1 && rooms[row + 1][col] === INF) {
            rooms[row + 1][col] = rooms[row][col] + 1;
            queue.push({row: row + 1, col});
        }
        if (col > 0 && rooms[row][col - 1] === INF) {
            rooms[row][col - 1] = rooms[row][col] + 1;
            queue.push({row, col: col - 1});
        }
        if (col < rooms[0].length - 1 && rooms[row][col + 1] === INF) {
            rooms[row][col + 1] = rooms[row][col] + 1;
            queue.push({row, col:col + 1});
        }
    }
};

const a = [
  [2147483647, -1        , 0         , 2147483647 ],
  [2147483647, 2147483647, 2147483647, -1         ],
  [2147483647, -1        , 2147483647, -1         ],
  [0         , -1        , 2147483647, 2147483647 ]
];

wallsAndGates(a);

console.log(a);
