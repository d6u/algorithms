/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null) {
            return head;
        }

        int len = 1;
        ListNode node = head;

        while (node.next != null) {
            len += 1;
            node = node.next;
        }

        node.next = head;

        k %= len;

        if (k != 0) {
            for (int i = 0; i < len - k; i++) {
                node = node.next;
            }
        }

        ListNode newHead = node.next;
        node.next = null;
        return newHead;
    }
}
