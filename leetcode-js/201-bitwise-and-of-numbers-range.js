/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    if (m === 0) {
        return 0;
    }

    let factor = 1;

    while (m !== n) {
        m >>= 1;
        n >>= 1;
        factor <<= 1;
    }

    return m * factor;
};
