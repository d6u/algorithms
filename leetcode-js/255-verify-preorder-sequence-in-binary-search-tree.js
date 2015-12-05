/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    var low = Number.MIN_VALUE;
    var stack = [];

    for (var p of preorder) {
        if (p < low) {
            return false;
        }
        while (stack.length && p > stack[stack.length - 1]) {
            low = stack.pop();
        }
        stack.push(p);
    }
    return true;
};
