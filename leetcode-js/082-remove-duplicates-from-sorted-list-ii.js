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
var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;

    while (current) {
        while (current.next && current.val === current.next.val) {
            current = current.next;
        }
        if (prev.next === current) {
            prev = prev.next;
        } else {
            prev.next = current.next;
        }
        current = current.next;
    }

    return dummy.next;
};
