public class Solution {
    public List<String> findStrobogrammatic(int n) {
        return helper(n, n);
    }

    List<String> helper(int n, int target) {
        if (n == 0) {
            return Arrays.asList("");
        }

        if (n == 1) {
            return Arrays.asList("1", "8", "0");
        }

        List<String> list = helper(n - 2, target);
        List<String> res = new ArrayList<>();

        for (String num : list) {
            if (n != target) {
                res.add("0" + num + "0");
            }
            res.add("1" + num + "1");
            res.add("8" + num + "8");
            res.add("6" + num + "9");
            res.add("9" + num + "6");
        }

        return res;
    }
}
