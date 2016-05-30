/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    'use strict';

    const list = [];
    let i = -1;

    while ((i = s.indexOf('++', i + 1)) >= 0) {
        list.push(`${s.substring(0, i)}--${s.substring(i+2)}`);
    }

    return list;
};
