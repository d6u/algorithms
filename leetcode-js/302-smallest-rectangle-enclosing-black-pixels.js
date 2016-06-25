/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {
    const left   = searchColumns(0     , y               , 0    , image.length , true  , image);
    const right  = searchColumns(y + 1 , image[0].length , 0    , image.length , false , image);
    const top    = searchRows(   0     , x               , left , right        , true  , image);
    const bottom = searchRows(   x + 1 , image.length    , left , right        , false , image);
    return (right - left) * (bottom - top);
};

function searchColumns(i, j, top, bottom, opt, image) {
    while (i !== j) {
        const mid = Math.floor((i + j) / 2);
        let k = top;
        while (k < bottom && image[k][mid] === '0') {
            k += 1;
        }
        if (k < bottom === opt) {
            j = mid;
        } else {
            i = mid + 1;
        }
    }
    return i;
}

function searchRows(i, j, left, right, opt, image) {
    while (i !== j) {
        const mid = Math.floor((i + j) / 2);
        let k = left;
        while (k < right && image[mid][k] === '0') {
            k += 1;
        }
        if (k < right === opt) {
            j = mid;
        } else {
            i = mid + 1;
        }
    }
    return i;
}

console.log(minArea(["0010","0110","0100"], 0, 2))
