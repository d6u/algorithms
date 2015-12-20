/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var words = str.split(' ');
    var map1 = new Map();
    var map2 = new Map();

    if (words.length !== pattern.length) {
        return false;
    }

    for (var i = 0; i < words.length; i++) {
        if (map1.get(pattern[i]) !== map2.get(words[i])) {
            return false;
        }
        map1.set(pattern[i], i);
        map2.set(words[i], i);
    }

    return true;
};
