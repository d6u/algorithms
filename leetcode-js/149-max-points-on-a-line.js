/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length < 2) {
        return points.length;
    }

    let result = 0;

    for (const [index, {x: x0, y: y0}] of points.entries()) {
        const map = new Map();
        let overlaps = 0;
        let vertical = 0;

        for (const {x: x1, y: y1} of points.slice(index + 1)) {
            if (x0 === x1 && y0 === y1) {
                overlaps += 1;
            } else if (x0 === x1) {
                vertical += 1;
            } else {
                const k = (y1 - y0) / (x1 - x0);
                const count = map.get(k);
                if (count == null) {
                    map.set(k, 1);
                } else {
                    map.set(k, count + 1);
                }
            }
        }

        result = Math.max(result, Math.max(vertical, ...map.values()) + 1 + overlaps);
    }

    return result;
};

// console.log(maxPoints([new Point(0,0),new Point(0,0)]))
// console.log(maxPoints([new Point(0,0),new Point(1,1),new Point(0,0)]))
console.log(maxPoints([new Point(4,0),new Point(4,-1),new Point(4,5)]))

function Point(x, y) {
    this.x = x;
    this.y = y;
}
