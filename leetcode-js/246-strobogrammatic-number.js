// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
//
// Write a function to determine if a number is strobogrammatic. The number is represented as a string.
//
// For example, the numbers "69", "88", and "818" are all strobogrammatic.

var lut = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6',
};

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    for (var i = 0, j = num.length - 1; i <= j; i++, j--) {
        if (!"00 11 88 696".includes(num[i] + '' + num[j])) {
            return false;
        }
    }
    return true;
};
