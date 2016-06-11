/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
        return null;
    }

    let len = 1;
    let node = head;

    while (node.next) {
        len += 1;
        node = node.next;
    }

    node.next = head;

    if ((k %= len)) {
        for (let i = 0; i < len - k; i += 1) {
            node = node.next;
        }
    }

    const newHead = node.next;
    node.next = null;
    return newHead;
};
