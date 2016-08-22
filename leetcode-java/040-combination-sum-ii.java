public class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(candidates);
        helper(res, new ArrayList<Integer>(), candidates, 0, target);
        return res;
    }

    void helper(List<List<Integer>> res, List<Integer> solution, int[] candidates, int start, int target) {
        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) {
                continue;
            }

            if (candidates[i] == target) {
                List<Integer> combination = new ArrayList<>(solution);
                combination.add(candidates[i]);
                res.add(combination);
            } else if (candidates[i] < target) {
                List<Integer> combination = new ArrayList<>(solution);
                combination.add(candidates[i]);
                helper(res, combination, candidates, i + 1, target - candidates[i]);
            } else {
                break;
            }
        }
    }
}
