/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {
    const result = [];
    helper(root, result);
    return result;
};

function helper(node, result) {
    if (!node) {
        return -1;
    }
    const height = 1 + Math.max(helper(node.left, result), helper(node.right, result));
    if (result.length < height + 1) {
        result.push([]);
    }
    result[height].push(node.val);
    return height;
}
