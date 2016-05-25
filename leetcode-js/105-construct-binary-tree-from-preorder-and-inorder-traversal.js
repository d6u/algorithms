function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null;
    }

    return _buildTree(preorder, 0, preorder.length, inorder, 0, inorder.length);
};

function _buildTree(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    'use strict';

    if (preStart === preEnd) {
        return null;
    }

    const val = preorder[preStart];
    const index = inorder.indexOf(val, inStart);
    const node = new TreeNode(val);

    node.left = _buildTree(preorder, preStart + 1, preStart + (index - inStart) + 1, inorder, inStart, index);
    node.right = _buildTree(preorder, preStart + (index - inStart) + 1, preEnd, inorder, index + 1, inEnd);

    return node;
}

console.log(buildTree([-1], [-1]))
