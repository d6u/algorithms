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
        // 1. Move forward on the shorter side
        if (height[left] <= height[right]) {
            // 2. Update max height the height increase
            if (height[left] >= maxLeftHeight) {
                maxLeftHeight = height[left];
            } else {
                // 3. Add area to result when height shorter than max
                result += maxLeftHeight - height[left];
            }
            left += 1;
        } else {
            // 4. Same as left side
            if (height[right] >= maxRightHeight) {
                maxRightHeight = height[right];
            } else {
                // 5. Same as left side
                result += maxRightHeight - height[right];
            }
            right -= 1;
        }
    }

    return result;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])
