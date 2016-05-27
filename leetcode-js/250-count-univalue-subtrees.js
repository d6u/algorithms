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
var countUnivalSubtrees = function(root) {
    const counter = {n: 0};
    _countUnivalSubtrees(root, counter);
    return counter.n;
};

function _countUnivalSubtrees(root, counter) {
    if (!root) {
        return true;
    }

    const leftIsUnival = _countUnivalSubtrees(root.left, counter);
    const rightIsUnival = _countUnivalSubtrees(root.right, counter);

    if (leftIsUnival && rightIsUnival) {
        if (root.left && root.val !== root.left.val) {
            return false;
        }
        if (root.right && root.val !== root.right.val) {
            return false;
        }
        counter.n += 1;
        return true;
    }

    return false;
}
