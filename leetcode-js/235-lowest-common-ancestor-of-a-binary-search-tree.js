/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root || !p || !q) {
    return null;
  }

  var a;
  var b;
  if (p.val < q.val) {
    a = p;
    b = q;
  } else {
    a = q;
    b = p;
  }

  if (a.val <= root.val && root.val <= b.val) {
    return root;
  }
  else if (root.val < a.val) {
    return lowestCommonAncestor(root.right, a, b);
  }
  else {
    return lowestCommonAncestor(root.left, a, b);
  }
};
