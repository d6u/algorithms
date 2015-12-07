/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    'use strict';

    let n = height.length;
    let left = 0;
    let right = n - 1;
    let res = 0;
    let maxleft = 0;
    let maxright = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxleft) {
                maxleft = height[left];
            } else {
                res += maxleft - height[left];
            }
            left += 1;
        } else {
            if (height[right] >= maxright) {
                maxright = height[right];
            } else {
                res += maxright - height[right];
            }
            right -= 1;
        }
    }

    return res;
};
