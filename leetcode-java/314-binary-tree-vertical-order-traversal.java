/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public List<List<Integer>> verticalOrder(TreeNode root) {
        if (root == null) {
            return new ArrayList<>();
        }

        Map<Integer, List<Integer>> map = new HashMap<>();
        Queue<TreeNode> queue = new LinkedList<>();
        Queue<Integer> columns = new LinkedList<>();

        queue.add(root);
        columns.add(0);

        int min = 0;
        int max = 0;

        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            int column = columns.poll();

            if (!map.containsKey(column)) {
                map.put(column, new ArrayList<>());
            }

            map.get(column).add(node.val);

            if (node.left != null) {
                queue.add(node.left);
                columns.add(column - 1);
                if (min > column - 1) {
                    min = column - 1;
                }
            }

            if (node.right != null) {
                queue.add(node.right);
                columns.add(column + 1);
                if (max < column + 1) {
                    max = column + 1;
                }
            }
        }

        List<List<Integer>> res = new ArrayList<>();

        for (int i = min; i <= max; i++) {
            res.add(map.get(i));
        }

        return res;
    }
}
