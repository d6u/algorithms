/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    return strs.reduce((encoded, str) => encoded + `${str.length}@${str}`, '');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    'use strict';

    const result = [];
    let start = 0;

    while (start < s.length) {
        const atPosition = s.indexOf('@', start);
        const len = parseInt(s.substring(start, atPosition));
        result.push(s.substr(atPosition + 1, len));
        start = atPosition + len + 1;
    }

    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
