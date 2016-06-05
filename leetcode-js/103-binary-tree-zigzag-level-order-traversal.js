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
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    let stack = [root];
    let fromLeft = true;

    while (stack.length) {
        const currentStack = stack.slice();
        stack = [];
        const currentRow = [];

        for (let i = currentStack.length - 1; i >= 0; i -= 1) {
            const node = currentStack[i];
            currentRow.push(node.val);
            if (fromLeft) {
                if (node.left) {
                    stack.push(node.left);
                }
                if (node.right) {
                    stack.push(node.right);
                }
            } else {
                if (node.right) {
                    stack.push(node.right);
                }
                if (node.left) {
                    stack.push(node.left);
                }
            }
        }

        result.push(currentRow);
        fromLeft = !fromLeft;
    }

    return result;
};
