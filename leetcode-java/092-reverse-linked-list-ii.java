/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode reverseBetween(ListNode head, int m, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;

        ListNode pre = dummy;

        for (int i = 1; i < m; i++) {
            pre = pre.next;
        }

        ListNode start = pre.next;
        ListNode cur = pre.next;

        for (int i = m; i < n; i++) {
            pre.next = cur.next;
            cur.next = pre.next.next;
            pre.next.next = start;

            start = pre.next;
        }

        return dummy.next;
    }
}
