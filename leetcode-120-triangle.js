/**
 * @param  {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  'use strict';

  let result = [];

  for (let r = triangle.length - 1; r >= 0; r--) {
    for (let c = 0; c < triangle[r].length; c++) {
      if (r === triangle.length - 1) {
        result[c] = triangle[r][c];
        continue;
      }

      result[c] = Math.min(result[c], result[c + 1]) + triangle[r][c];
    }
  }

  return result[0];
};
