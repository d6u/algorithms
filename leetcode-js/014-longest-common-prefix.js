/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';

    var min = Math.min.apply(null, strs.map(s => s.length));
    var prefix = strs[0].slice(0, min);
    var i;
    var e;
    var j;
    for (i = 1; i < strs.length; i++) {
        e = strs[i];
        for (j = 0; j < prefix.length; j++) {
            if (prefix[j] !== e[j]) {
                prefix = prefix.slice(0, j);
                break;
            }
        }
    }
    return prefix;
};
