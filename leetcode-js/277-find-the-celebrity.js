/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        if (n < 2) return n ? 0 : -1;
        var curr = 0;
        var next = 1;
        for (; next < n; next++) {
            if (knows(curr, next)) {
                curr = next;
            }
        }
        for (var i = 0; i < n; i++) {
            if (curr !== i && (knows(curr, i) || !knows(i, curr))) {
                return -1;
            }
        }
        return curr;
    };
};
