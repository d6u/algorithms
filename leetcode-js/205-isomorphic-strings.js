/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    'use strict';

    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < s.length; i += 1) {
        if (!map1.get(s[i])) {
            map1.set(s[i], t[i]);
        } else if (map1.get(s[i]) !== t[i]) {
            return false;
        }

        if (!map2.get(t[i])) {
            map2.set(t[i], s[i]);
        } else if (map2.get(t[i]) !== s[i]) {
            return false;
        }
    }

    return true;
};
