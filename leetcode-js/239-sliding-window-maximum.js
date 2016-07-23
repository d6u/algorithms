/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const queue = [];

    for (let i = 0; i < nums.length; i++) {
        // 1. If head of the queue is no longer inside the window
        while (queue.length && queue[0] < i - k + 1) {
            queue.shift();
        }

        // 2. Remove all elements that are smaller than current number
        while (queue.length && nums[queue[queue.length-1]] < nums[i]) {
            queue.pop();
        }

        // 3. Save current index
        queue.push(i);

        // 4. When we have a valid window, the head is always the largest
        if (i >= k - 1) {
            result.push(nums[queue[0]]);
        }
    }

    return result;
};
