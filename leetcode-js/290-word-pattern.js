/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr = str.split(' ');
    var map = new Map();

    if (arr.length !== pattern.length) {
        return false;
    }

    for (var i = 0; i < arr.length; i++) {
        var c = pattern[i];
        if (map.has(c)) {
            if (map.get(c) !== arr[i]) {
                return false;
            }
        } else {
            if (Array.from(map.values()).indexOf(arr[i]) > -1) {
                return false;
            }
            map.set(c, arr[i]);
        }
    }
    return true;
};
