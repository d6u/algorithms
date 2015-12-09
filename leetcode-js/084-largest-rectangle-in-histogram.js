/**
 * @param  {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
    height.push(0);

    var ret = 0;
    var index = [];

    for (var i = 0; i < height.length; i++) {
        while (index.length > 0 && height[last(index)] >= height[i]) {
            var h = height[index.pop()];
            console.log({h, i});

            var sidx = index.length > 0 ? last(index) : -1;
            if (h * (i - sidx - 1) > ret) {
                ret = h * (i - sidx - 1);
            }
        }

        index.push(i);
    }

    return ret;
};

function last(arr) {
    return arr[arr.length - 1];
}

console.log(largestRectangleArea([2,1,5,6,2,3]));
