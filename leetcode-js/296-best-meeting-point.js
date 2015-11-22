/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    var m = grid.length;
    var n = grid[0].length;

    var I = [];
    var J = [];

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                I.push(i);
                J.push(j);
            }
        }
    }

    return getMin(I) + getMin(J);
};

function getMin(list) {
    var ret = 0;
    list.sort((a, b) => a - b);
    var i = 0;
    var j = list.length - 1;
    while (i < j) {
        ret += list[j--] - list[i++];
    }
    return ret;
}
