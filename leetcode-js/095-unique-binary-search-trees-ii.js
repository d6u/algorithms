/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return _generateTrees(1, n);
};

function _generateTrees(min, max) {
    'use strict';

    if (min > max) {
        return [null];
    }

    const result = [];

    for (let i = min; i <= max; i += 1) {
        const leftNodes = _generateTrees(min, i - 1);
        const rightNodes = _generateTrees(i + 1, max);
        for (const leftNode of leftNodes) {
            for (const rightNode of rightNodes) {
                const node = new TreeNode(i);
                node.left = leftNode;
                node.right = rightNode;
                result.push(node);
            }
        }
    }

    return result;
}
