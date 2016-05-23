/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    'use strict';

    let i = 0;
    let j = 0;
    let star = -1;
    let mark = -1;

    while (i < s.length) {
        if (j < p.length && (s[i] === p[j] || p[j] === '?')) {
            i += 1;
            j += 1;
        } else if (j < p.length && p[j] === '*') {
            star = j;
            j += 1;
            mark = i;
        } else if (star !== -1) {
            j = star + 1;
            i = mark;
            mark += 1;
        } else {
            return false;
        }
    }

    while (j < p.length && p[j] === '*') {
        j += 1;
    }

    return j === p.length;
};
