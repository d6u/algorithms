/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) {
        return null;
    }

    let last = lists.length - 1;

    while (last > 0) {
        let first = 0;
        while (first < last) {
            lists[first] = mergeList(lists[first], lists[last]);
            first += 1;
            last -= 1;
        }
    }

    return lists[0];
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
