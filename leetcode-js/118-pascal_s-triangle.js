/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var r = [];
    var row = [];
    var newRow;
    var i = 0;
    var j;
    while (i < numRows) {
        i += 1;

        j = 1;
        newRow = [1];
        while (j < i) {
            newRow.push(row[j - 1] + (row[j] || 0));
            j += 1;
        }
        r.push(newRow);
        row = newRow;
    }
    return r;
};
