/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
    if (x.length <= 3) {
        return false;
    }

    for (let i = 3; i < x.length; i += 1) {
        if (x[i] >= x[i-2] &&
            x[i-1] <= x[i-3]) {
            // Fourth line crosses first line and onward
            return true;
        }
        if (i >= 4 &&
            x[i-1] === x[i-3] &&
            x[i] + x[i-4] >= x[i-2]) {
            // Fifth line meets first line and onward
            return true;
        }
        if (i >= 5 &&
            x[i-2] - x[i-4] >= 0 &&
            x[i] >= x[i-2] - x[i-4] &&
            x[i-1] >= x[i-3] - x[i-5] &&
            x[i-1] <= x[i-3]) {
            // Sixth line crosses first line and onward
            return true;
        }
    }

    return false;
};
