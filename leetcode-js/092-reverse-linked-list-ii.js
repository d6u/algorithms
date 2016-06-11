/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head) {
        return null;
    }

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 1; i < m; i += 1) {
        prev = prev.next;
    }

    let start = prev.next;
    let next = start.next;

    for (let i = 1; i <= n - m; i += 1) {
        start.next = next.next;
        next.next = prev.next;
        prev.next = next;
        next = start.next;
    }

    return dummy.next;
};
