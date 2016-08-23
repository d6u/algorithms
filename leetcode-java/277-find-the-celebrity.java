/* The knows API is defined in the parent class Relation.
      boolean knows(int a, int b); */

public class Solution extends Relation {
    public int findCelebrity(int n) {
        int curr = 0;
        int next = 0;

        while (next < n) {
            if (knows(curr, next)) {
                curr = next;
            }
            next++;
        }

        for (int i = 0; i < n; i++) {
            if (curr != i && (!knows(i, curr) || knows(curr, i))) {
                return -1;
            }
        }

        return curr;
    }
}
