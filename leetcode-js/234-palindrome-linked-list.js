/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }

    let fast = head;
    let slow = head;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    slow.next = reverseList(slow.next);
    slow = slow.next;

    while (slow) {
        if (head.val !== slow.val) {
            return false;
        }
        slow = slow.next;
        head = head.next;
    }

    return true;
};

function reverseList(head) {
    let prev;

    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
}
