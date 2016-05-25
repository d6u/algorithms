/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return [];
    }

    const result = [];
    _pathSum(root, sum, [], result);
    return result;
};

function _pathSum(node, sum, paths, result) {
    if (node.left) {
        _pathSum(node.left, sum - node.val, paths.concat([node.val]), result);
    }

    if (node.right) {
        _pathSum(node.right, sum - node.val, paths.concat([node.val]), result);
    }

    if (!node.left && !node.right && sum === node.val) {
        result.push(paths.concat([node.val]));
    }
}
