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
    'use strict';

    if (k < 2) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;

    let p = dummy;

    while (p.next && p.next.next) {
        let prev = p.next;
        let cur = prev.next;
        let i = 0;
        while (cur && i < k - 1) {
            let temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
            i += 1;
        }
        if (i === k - 1) {
            let temp = p.next;
            p.next.next = cur;
            p.next = prev;
            p = temp;
        } else {
            cur = prev.next;
            prev.next = null;
            while (cur !== p.next) {
                let temp = cur.next;
                cur.next = prev;
                prev = cur;
                cur = temp;
            }
            break;
        }
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
