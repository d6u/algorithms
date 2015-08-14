/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length === 0 || height.length === 1) return 0;
  var p1 = 0;
  var p2 = height.length - 1;
  var area = 0;

  while (p1 < p2) {
    area = Math.max(Math.min(height[p1], height[p2]) * (p2 - p1), area);
    if (height[p1] > height[p2]) {
      p2 -= 1;
    } else {
      p1 += 1;
    }
  }

  return area;
};
