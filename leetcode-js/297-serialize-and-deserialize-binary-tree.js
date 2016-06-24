/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];
    buildString(root, result);
    return result.join(',');
};

function buildString(node, result) {
    if (!node) {
        result.push('X');
    } else {
        result.push(node.val);
        buildString(node.left, result);
        buildString(node.right, result);
    }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const queue = data.split(',');
    return buildTree(queue);
};

function buildTree(queue) {
    const val = queue.shift();
    if (val === 'X') {
        return null;
    } else {
        const node = new TreeNode(parseInt(val));
        node.left = buildTree(queue);
        node.right = buildTree(queue);
        return node;
    }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

console.log(serialize(new TreeNode(1)))
// console.log(deserialize());

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
