/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    const Xs = [];
    const Ys = [];

    for (let x = 0; x < grid.length; x += 1) {
        for (let y = 0; y < grid[0].length; y += 1) {
            if (grid[x][y] === 1) {
                Xs.push(x);
                Ys.push(y);
            }
        }
    }

    return getMin(Xs) + getMin(Ys);
};

function getMin(arr) {
    arr.sort((a, b) => a - b);
    let result = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        result += arr[right] - arr[left];
        right -= 1;
        left += 1;
    }
    return result;
}
