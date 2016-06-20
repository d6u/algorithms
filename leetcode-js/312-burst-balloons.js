/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    // 1. Insert 1 to first and end for easy calculation
    const arr = [1, ...nums, 1];

    // 2. Create 2D array filled with 0,
    // dp[left][right] is the largest possible value between left and right,
    // excluding left and right boundaries
    const dp = Array(arr.length).fill().map(() => Array(arr.length).fill(0));

    // 3. Start with small number of balloons.
    // First, calculate 1 balloon, then 2, etc. Eventually to all balloons
    for (let len = 1; len <= nums.length; len += 1) {
        for (let left = 0; left < arr.length - len - 1; left += 1) {
            const right = left + len + 1;
            // 4. Left and right boundaries are not included into balloons,
            // i.e. left + 1 and right - 1
            for (let i = left + 1; i <= right - 1; i += 1) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    // 5. arr[left] * arr[i] * arr[right] is the last bursted balloon
                    arr[left] * arr[i] * arr[right] + dp[left][i] + dp[i][right]
                );
            }
        }
    }

    return dp[0][arr.length - 1];
};

console.log(maxCoins([3,1,5,8]));
