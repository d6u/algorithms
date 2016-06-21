/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function(root) {
    const result = solve(root);
    return Math.abs(result.res);
};

function solve(root) {
    if (!root) {
        return {
            res: 0,
            min: Infinity,
            max: -Infinity
        };
    }
    const left = solve(root.left);
    const right = solve(root.right);
    if (left.res < 0 || right.res < 0 || root.val < left.max || root.val > right.min) {
        return {
            res: Math.max(Math.abs(left.res), Math.abs(right.res)) * -1,
            min: 0,
            max: 0
        };
    } else {
        return {
            res: left.res + right.res + 1,
            min: Math.min(root.val, left.min),
            max: Math.max(root.val, right.max)
        };
    }
}
