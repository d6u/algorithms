/**
 * Definition for singly-linked list with a random pointer.
 * class RandomListNode {
 *     int label;
 *     RandomListNode next, random;
 *     RandomListNode(int x) { this.label = x; }
 * };
 */
public class Solution {
    public RandomListNode copyRandomList(RandomListNode head) {
        if (head == null) {
            return null;
        }

        RandomListNode node = head;

        while (node != null) {
            RandomListNode copy = new RandomListNode(node.label);
            copy.next = node.next;
            node.next = copy;
            node = node.next.next;
        }

        node = head;

        while (node != null) {
            if (node.random != null) {
                node.next.random = node.random.next;
            }
            node = node.next.next;
        }

        node = head;
        RandomListNode copyHead = node.next;
        RandomListNode copyNode = copyHead;

        while (node != null) {
            node.next = node.next.next;
            node = node.next;
            if (copyNode.next != null) {
                copyNode.next = copyNode.next.next;
            }
            copyNode = copyNode.next;
        }

        return copyHead;
    }
}
