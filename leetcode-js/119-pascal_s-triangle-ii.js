/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];

    var p = [1];
    var r = [1];
    var i = 1;
    var j;

    while (i <= rowIndex) {
        j = 0;
        while (j < i) {
            r.push(p[j] + (p[j + 1] || 0));
            j += 1;
        }
        p = r;
        r = [1];
        i += 1;
    }

    return p;
};
