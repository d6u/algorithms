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

    var result = 0;

    for (var i = 0; i < points.length; i++) {
        var lines = new Map();
        var localMax = 0;
        var overlap = 0;
        var vertical = 0;

        for (var j = i+1; j < points.length; j++) {
            if (points[j].x === points[i].x && points[j].y === points[i].y) {
                overlap += 1;
                continue;
            } else if (points[j].x === points[i].x) {
                vertical += 1;
            } else {
                var a = points[j].x - points[i].x;
                var b = points[j].y - points[i].y;
                var gcd = GCD(a, b);

                a = Math.floor(a / gcd);
                b = Math.floor(b / gcd);

                var pair = makePair(a, b);

                lines.set(pair, lines.get(pair) ? 1 : lines.get(pair) + 1);

                localMax = Math.max(lines.get(pair) || 0, localMax);
            }

            localMax = Math.max(vertical, localMax);
        }

        result = Math.max(result, localMax + overlap + 1);
    }

    return result;
};

function makePair(a, b) {
    return '' + a + '-' + b;
}

function GCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return GCD(b, a % b);
    }
}

var a = maxPoints([[0,0],[1,0]]);
console.log(a);
