/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function(points) {
    if (!points.length) {
        return true;
    }

    const Xs = points.map(([x]) => x);
    const Xmin = Math.min(...Xs);
    const Xmax = Math.max(...Xs);

    const set = new Set(points.map(([x, y]) => `${x},${y}`));

    for (const [x, y] of points) {
        if (!set.has(`${Xmax + Xmin - x},${y}`)) {
            return false;
        }
    }

    return true;
};

console.log(isReflected([[1,2],[2,2],[1,4],[2,4]]));
