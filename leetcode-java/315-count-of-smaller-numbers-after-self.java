public class Solution {
    public List<Integer> countSmaller(int[] nums) {
        int[] res = new int[nums.length];

        Node root = null;

        for (int i = nums.length - 1; i >= 0; i--) {
            root = insert(root, nums[i], i, 0, res);
        }

        List<Integer> list = new ArrayList<>();
        for (int n : res) {
            list.add(n);
        }
        return list;
    }

    Node insert(Node node, int n, int i, int leftCount, int[] res) {
        if (node == null) {
            node = new Node(n, 0);
            res[i] = leftCount;
        } else if (n == node.val) {
            node.dup += 1;
            res[i] = node.leftCount + leftCount;
        } else if (n < node.val) {
            node.leftCount += 1;
            node.left = insert(node.left, n, i, leftCount, res);
        } else {
            node.right = insert(node.right, n, i, leftCount + node.leftCount + node.dup, res);
        }

        return node;
    }

    class Node {
        Node left;
        Node right;
        int leftCount;
        int dup = 1;
        int val;

        Node(int val, int leftCount) {
            this.val = val;
            this.leftCount = leftCount;
        }
    }
}
