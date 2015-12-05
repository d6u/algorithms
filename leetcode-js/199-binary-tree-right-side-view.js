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
var rightSideView = function(root) {
    return Array.from(iterateTreeRightSide(root));
};

function *iterateTreeRightSide(root) {
    if (!root) {
        return;
    }

    var queue = [root];

    while (queue.length) {
        var len = queue.length;
        for (var i = 0; i < len; i++) {
            var right = queue.shift();
            if (i === 0) {
                yield right.val;
            }
            if (right.right) {
                queue.push(right.right);
            }
            if (right.left) {
                queue.push(right.left);
            }
        }
    }
}
