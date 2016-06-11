/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }

    let fast = head;
    let slow = head;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let middle = reverseList(slow.next);
    slow.next = null;

    const dummy = new ListNode(0);
    let node = dummy;

    while (middle) {
        node.next = head;
        head = head.next;
        node.next.next = middle;
        middle = middle.next;
        node = node.next.next;
    }

    node.next = head;
};

function reverseList(node) {
    let prev = null;

    while (node) {
        const next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    return prev;
}
