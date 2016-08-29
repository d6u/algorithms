/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public void reorderList(ListNode head) {
        if (head == null) {
            return;
        }

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        ListNode mid = slow.next;

        slow.next = null;

        ListNode node1 = head;
        ListNode node2 = reverse(mid);
        ListNode dummy = new ListNode(0);
        ListNode node = dummy;

        while (node1 != null) {
            node.next = node1;
            node = node.next;
            node1 = node1.next;
            if (node2 != null) {
                node.next = node2;
                node = node.next;
                node2 = node2.next;
            }
        }
    }

    ListNode reverse(ListNode head) {
        if (head == null) {
            return null;
        }

        ListNode dummy = new ListNode(0);
        ListNode cur = head;

        dummy.next = head;

        while (cur.next != null) {
            ListNode start = dummy.next;
            dummy.next = cur.next;
            cur.next = dummy.next.next;
            dummy.next.next = start;
        }

        return dummy.next;
    }
}
