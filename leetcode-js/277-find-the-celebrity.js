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
        if (n <= 1) {
            return n === 0 ? -1 : 0;
        }

        let curr = 0;
        let next = 1;

        while (next < n) {
            if (knows(curr, next)) {
                curr = next;
            }
            next += 1;
        }

        for (let i = 0; i < n; i += 1) {
            if (curr !== i && (knows(curr, i) || !knows(i, curr))) {
                return -1;
            }
        }

        return curr;
    };
};
