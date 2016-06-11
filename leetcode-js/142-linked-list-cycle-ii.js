/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }

    let fast = head.next.next;
    let slow = head.next;

    while (fast && fast.next && fast.next.next && fast !== slow) {
        fast = fast.next.next;
        slow = slow.next;
    }

    if (!fast || !fast.next || !fast.next.next) {
        return null;
    }

    fast = head;

    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }

    return fast;
};
