/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    'use strict';

    const result = triangle[triangle.length - 1].slice();

    for (let i = triangle.length - 2; i >= 0; i -= 1) {
        for (let j = 0; j < triangle[i].length; j += 1) {
            result[j] = Math.min(
                triangle[i][j] + result[j],
                triangle[i][j] + result[j+1]
            );
        }
    }

    return result[0];
};

console.log(minimumTotal([[1],[2,3]]));
