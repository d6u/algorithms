/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var carry = 0;
    var result = '';
    var i;
    var j;
    var valA;
    var valB;
    var val;

    for (i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        valA = i >= 0 ? parseInt(a[i]) : 0;
        valB = j >= 0 ? parseInt(b[j]) : 0;
        val = (valA + valB + carry) % 2;
        carry = Math.floor((valA + valB + carry) / 2);
        result = val.toString() + result;
    }

    if (carry === 1) {
        result = '1' + result;
    }

    return result;
};
