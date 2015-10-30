/**
 * @param  {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const wallsAndGates = function (rooms) {
  'use strict';

  const maxRow = rooms.length;

  if (!maxRow) {
    return;
  }

  const maxCol = rooms[0].length;

  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[row].length; col++) {

      if (rooms[row][col] === 0) {

        const stack = [
          [row - 1, col, 1],
          [row + 1, col, 1],
          [row, col - 1, 1],
          [row, col + 1, 1],
        ]

        while (stack.length) {
          const el = stack.pop();
          const rowC = el[0];
          const colC = el[1];
          const dist = el[2];

          if (rowC < 0 ||
            colC < 0 ||
            rowC >= maxRow ||
            colC >= maxCol ||
            rooms[rowC][colC] < dist)
          {
            continue;
          }

          rooms[rowC][colC] = dist;

          stack.push([rowC - 1, colC, dist + 1]);
          stack.push([rowC + 1, colC, dist + 1]);
          stack.push([rowC, colC - 1, dist + 1]);
          stack.push([rowC, colC + 1, dist + 1]);
        }
      }
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
