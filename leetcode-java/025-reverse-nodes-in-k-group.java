/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        int len = 0;

        ListNode node = head;

        while (node != null) {
            node = node.next;
            len++;
        }

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        node = dummy;

        while (len - k >= 0) {
            node = reverse(node, k);
            len -= k;
        }

        return dummy.next;
    }

    private ListNode reverse(ListNode prev, int k) {
        ListNode tail = prev.next;

        while (k > 1) {
            k--;

            ListNode start = prev.next;
            prev.next = tail.next;
            tail.next = tail.next.next;
            prev.next.next = start;
        }

        return tail;
    }
}
