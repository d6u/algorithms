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
var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let odd = head;
    let even = head.next;
    const evenHead = even;

    while (even && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
};
