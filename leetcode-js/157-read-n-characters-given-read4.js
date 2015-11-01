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
    var cache = [];

    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        var count;
        var tmp;
        var newArr;

        while (cache.length < n) {
            tmp = [];
            read4(tmp);
            cache.push.apply(cache, tmp);
            if (tmp < 4) {
                break;
            }
        }

        newArr = cache.splice(0, n);
        buf.push.apply(buf, newArr);

        return newArr.length;
    };
};
