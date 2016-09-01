public class Solution {
    public List<Integer> lexicalOrder(int n) {
        List<Integer> res = new ArrayList<>();

        int x = 1;

        for (int i = 1; i <= n; i++) {
            res.add(x);

            if (x * 10 <= n) {
                x *= 10;
            } else if (x % 10 != 9 && x + 1 <= n) {
                x += 1;
            } else {
                do {
                    x /= 10;
                } while (x % 10 == 9);
                x += 1;
            }
        }

        return res;
    }
}
