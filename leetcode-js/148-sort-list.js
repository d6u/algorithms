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
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let fast = head.next.next;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    const head1 = sortList(slow.next);
    slow.next = null;
    const head2 = sortList(head);

    return mergeList(head1, head2);
};

function mergeList(head1, head2) {
    const dummy = new ListNode(0);
    let node = dummy;

    while (head1 && head2) {
        if (head1.val < head2.val) {
            node.next = head1;
            head1 = head1.next;
        } else {
            node.next = head2;
            head2 = head2.next;
        }
        node = node.next;
    }

    node.next = head1 ? head1 : head2;

    return dummy.next;
}
