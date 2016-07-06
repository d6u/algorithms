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
var plusOne = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let i = dummy;
    let j = dummy;

    while (j.next) {
        j = j.next;
        if (j.val !== 9) {
            i = j;
        }
    }

    if (j.val !== 9) {
        j.val += 1;
    } else {
        i.val += 1;
        i = i.next;
        while (i) {
            i.val = 0;
            i = i.next;
        }
    }

    if (dummy.val === 0) {
        return dummy.next;
    }

    return dummy;
};
