// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
//
// Write a function to determine if a number is strobogrammatic. The number is represented as a string.
//
// For example, the numbers "69", "88", and "818" are all strobogrammatic.

const map = {
    '00': 1,
    '11': 1,
    '88': 1,
    '69': 1,
    '96': 1,
};

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    for (var i = 0, j = num.length - 1; i <= j; i++, j--) {
        if (!map[`${num[i]}${num[j]}`]) {
            return false;
        }
    }
    return true;
};
