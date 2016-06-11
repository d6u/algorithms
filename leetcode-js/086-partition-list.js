/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const dummy1 = new ListNode(0);
    const dummy2 = new ListNode(0);
    let node1 = dummy1;
    let node2 = dummy2;

    while (head) {
        if (head.val < x) {
            node1.next = head;
            node1 = node1.next;
        } else {
            node2.next = head;
            node2 = node2.next;
        }
        head = head.next;
    }

    node1.next = dummy2.next;
    node2.next = null;

    return dummy1.next;
};
