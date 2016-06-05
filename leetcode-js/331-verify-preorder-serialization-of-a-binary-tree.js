/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let diff = 1;

    for (const node of preorder.split(',')) {
        diff -= 1;
        if (diff < 0) {
            return false;
        }
        if (node !== '#') {
            diff += 2;
        }
    }

    return diff === 0;
};
