/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var a = 0;
        var b = n - 1;
        var m;

        while (a < b) {
            m = Math.floor((a + b) / 2);
            if (isBadVersion(m + 1)) {
                b = m;
            } else {
                a = m + 1;
            }
        }

        return a + 1;
    };
};
