/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    var list = [];
    for (var i = -1; (i = s.indexOf('++', i+1)) >= 0;) {
        list.push(s.substring(0, i) + '--' + s.substring(i+2));
    }
    return list;
};
