/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxLeftHeight = 0;
    let maxRightHeight = 0;
    let left = 0;
    let right = height.length - 1;
    let result = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeftHeight) {
                maxLeftHeight = height[left];
            } else {
                result += maxLeftHeight - height[left];
            }
            left += 1;
        } else {
            if (height[right] >= maxRightHeight) {
                maxRightHeight = height[right];
            } else {
                result += maxRightHeight - height[right];
            }
            right -= 1;
        }
    }

    return result;
};
