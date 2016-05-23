/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    'use strict';

    let temp = [];

    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        while (temp.length < n) {
            const current = [];
            read4(current);
            temp = temp.concat(current);
            if (current.length < 4) {
                break;
            }
        }

        const count = buf.push.apply(buf, temp.slice(0, n));
        temp = temp.slice(n);
        return count;
    };
};
