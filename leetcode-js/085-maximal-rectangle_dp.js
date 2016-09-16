/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) {
        return 0;
    }

    const m = matrix.length;
    const n = matrix[0].length;
    const lefts = Array(n).fill(0);
    const rights = Array(n).fill(n);
    const heights = Array(n).fill(0);

    let max = 0;

    for (let i = 0; i < m; i += 1) {
        let left = 0;
        let right = n;

        for (let j = 0; j < n; j += 1) {
            if (matrix[i][j] === '1') {
                lefts[j] = Math.max(lefts[j], left);
            } else {
                lefts[j] = 0;
                left = j + 1;
            }
        }

        for (let j = n - 1; j >= 0; j -= 1) {
            if (matrix[i][j] === '1') {
                rights[j] = Math.min(rights[j], right);
            } else {
                rights[j] = n;
                right = j;
            }
        }

        for (let j = 0; j < n; j += 1) {
            if (matrix[i][j] === '1') {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }

        for (let j = 0; j < n; j += 1) {
            max = Math.max(max, (rights[j] - lefts[j]) * heights[j]);
        }
    }

    return max;
};

console.log(maximalRectangle(["10100","10111","11111","10010"]))
