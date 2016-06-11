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
var insertionSortList = function(head) {
    if (!head) {
        return null;
    }

    const dummy = new ListNode(0);
    let curr = head;
    let prev = dummy;

    while (curr) {
        const next = curr.next;
        while (prev.next && prev.next.val < curr.val) {
            prev = prev.next;
        }
        curr.next = prev.next;
        prev.next = curr;
        prev = dummy;
        curr = next;
    }

    return dummy.next;
};
