/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var map1 = {};
    var map2 = {};

    for (var i = 0; i < s.length; i++) {

        if (!map1[s[i]]) {
            map1[s[i]] = t[i];
        } else {
            if (map1[s[i]] !== t[i]) {
                return false;
            }
        }

        if (!map2[t[i]]) {
            map2[t[i]] = s[i];
        } else {
            if (map2[t[i]] !== s[i]) {
                return false;
            }
        }
    }

    return true;
};
