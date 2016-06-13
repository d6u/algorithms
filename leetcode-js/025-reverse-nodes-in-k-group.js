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
var reverseKGroup = function(head, k) {
    if (!head || k === 1) {
        return head;
    }

    let num = 0;
    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next) {
        num += 1;
        current = current.next;
    }

    let prev = dummy;

    while (num >= k) {
        current = prev.next;
        let next = current.next;
        for (let i = 1; i < k; i += 1) {
            current.next = next.next;
            next.next = prev.next;
            prev.next = next;
            next = current.next;
        }
        prev = current;
        num -= k;
    }

    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
a.next = b;

console.log(reverseKGroup(a, 2));
