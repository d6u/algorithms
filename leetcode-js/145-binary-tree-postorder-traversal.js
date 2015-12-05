/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    return Array.from(postorderIterateTree(root));
};

function *postorderIterateTree(root) {
    if (!root) {
        return;
    }

    var stack = [root];
    var pre;

    while (stack.length) {
        var cur = stack[stack.length - 1];
        if (pre == null || pre.left === cur || pre.right === cur) {
            if (cur.left) {
                stack.push(cur.left);
            } else if (cur.right) {
                stack.push(cur.right);
            }
        } else if (pre === cur.left && cur.right) {
            stack.push(cur.right);
        } else {
            yield cur.val;
            stack.pop();
        }
        pre = cur;
    }
}
