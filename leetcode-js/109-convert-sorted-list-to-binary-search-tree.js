/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) {
        return null;
    }

    let fast = head;
    let slow = head;
    let prev;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    if (prev) {
        prev.next = null;
    } else {
        head = null;
    }

    const root = new TreeNode(slow.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow.next);

    return root;
};
