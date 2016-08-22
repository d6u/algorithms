public class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<>();

        if (nums.length < 4) {
            return res;
        }

        Arrays.sort(nums);

        int max = nums[nums.length - 1];

        if (nums[0] * 4 > target || max * 4 < target) {
            return res;
        }

        for (int i = 0; i < nums.length - 3; i++) {
            int n = nums[i];

            if (i > 0 && n == nums[i - 1]) {
                continue;
            } else if (n * 4 > target) {
                break;
            } else if (n + max * 3 < target) {
                continue;
            } else if (n * 4 == target) {
                if (nums[i + 3] == n) {
                    res.add(Arrays.asList(n, n, n, n));
                }
                break;
            }

            threeSum(res, n, nums, i + 1, max, target - n);
        }

        return res;
    }

    void threeSum(List<List<Integer>> res, int a, int[] nums, int start, int max, int target) {
        if (nums[start] * 3 > target) {
            return;
        }

        for (int i = start; i < nums.length - 2; i++) {
            int n = nums[i];

            if (i > start && n == nums[i - 1]) {
                continue;
            } else if (n * 3 > target) {
                break;
            } else if (n + max * 2 < target) {
                continue;
            } else if (n * 3 == target) {
                if (nums[i + 2] == n) {
                    res.add(Arrays.asList(a, n, n, n));
                }
                break;
            }

            twoSum(res, a, n, nums, i + 1, target - n);
        }
    }

    void twoSum(List<List<Integer>> res, int a, int b, int[] nums, int start, int target) {
        int end = nums.length - 1;

        while (start < end) {
            int sum = nums[start] + nums[end];

            if (sum == target) {
                res.add(Arrays.asList(a, b, nums[start], nums[end]));
                while (start < end && nums[start] == nums[start + 1]) {
                    start++;
                }
                while (start < end && nums[end] == nums[end - 1]) {
                    end--;
                }
                start++;
                end--;
            } else if (sum < target) {
                while (start < end && nums[start] == nums[start + 1]) {
                    start++;
                }
                start++;
            } else {
                while (start < end && nums[end] == nums[end - 1]) {
                    end--;
                }
                end--;
            }
        }
    }
}
