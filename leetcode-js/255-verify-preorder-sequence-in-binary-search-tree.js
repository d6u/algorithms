/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    var low = Number.MIN_VALUE;
    var i = -1;
    for (var p of preorder) {
        if (p < low) {
            return false;
        }
        while (i >= 0 && p > preorder[i]) {
            low = preorder[i--];
        }
        preorder[++i] = p;
    }
    return true;
};
