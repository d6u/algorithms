/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length === 0 || height.length === 1) {
        return 0;
    }

    let left = 0;
    let right = height.length - 1;
    let area = 0;

    while (left < right) {
        area = Math.max(area, Math.min(height[left], height[right]) * (right - left));
        if (height[left] > height[right]) {
            right -= 1;
        } else {
            left += 1;
        }
    }

    return area;
};
