/**
 * Definition for binary tree with next pointer.
 * public class TreeLinkNode {
 *     int val;
 *     TreeLinkNode left, right, next;
 *     TreeLinkNode(int x) { val = x; }
 * }
 */
public class Solution {
    public void connect(TreeLinkNode root) {
        TreeLinkNode topMostLeft = root;

        while (topMostLeft != null) {
            TreeLinkNode topCurrent = topMostLeft;
            TreeLinkNode mostLeft = null;
            TreeLinkNode current = null;

            while (topCurrent != null) {
                if (topCurrent.left != null) {
                    if (mostLeft == null) {
                        mostLeft = topCurrent.left;
                        current = mostLeft;
                    } else {
                        current.next = topCurrent.left;
                        current = current.next;
                    }
                }

                if (topCurrent.right != null) {
                    if (mostLeft == null) {
                        mostLeft = topCurrent.right;
                        current = mostLeft;
                    } else {
                        current.next = topCurrent.right;
                        current = current.next;
                    }
                }

                topCurrent = topCurrent.next;
            }

            topMostLeft = mostLeft;
        }
    }
}
