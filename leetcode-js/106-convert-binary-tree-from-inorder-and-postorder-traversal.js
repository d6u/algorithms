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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length) {
        return null;
    }

    return _buildTree(postorder.reverse(), 0, postorder.length, inorder.reverse(), 0, inorder.length);
};

function _buildTree(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    'use strict';

    if (preStart === preEnd) {
        return null;
    }

    const val = preorder[preStart];
    const index = inorder.indexOf(val, inStart);
    const node = new TreeNode(val);

    node.right = _buildTree(preorder, preStart + 1, preStart + (index - inStart) + 1, inorder, inStart, index);
    node.left = _buildTree(preorder, preStart + (index - inStart) + 1, preEnd, inorder, index + 1, inEnd);

    return node;
}

console.log(buildTree([1,3,2], [3,2,1]));
