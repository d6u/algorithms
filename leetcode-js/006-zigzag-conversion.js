/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var vs = Array(numRows);
    var i;
    var n = s.length;
    var j;

    for (i = 0; i < vs.length; i++) {
        vs[i] = [];
    }

    i = 0;

    while (i < n) {
        for (j = 0; j < numRows && i < n; j++) {
            vs[j].push(s[i]);
            i += 1;
        }
        for (j = numRows - 2; j >= 1 && i < n; j--) {
            vs[j].push(s[i]);
            i += 1;
        }
    }

    var zigzag = '';

    for (var v of vs) {
        zigzag += v.join('');
    }

    return zigzag;
};
