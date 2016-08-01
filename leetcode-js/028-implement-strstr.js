/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }

    if (!haystack) {
        return -1;
    }

    var p = preprocess(needle);
    var j = 0;

    for (var i = 0; i < haystack.length; i += 1) {
        while (j > 0 && haystack[i] !== needle[j]) {
            // move to compare the prefix of prefix
            j = p[j];
        }
        if (haystack[i] === needle[j]) {
            j += 1;
        }
        if (j === needle.length) {
            return i - needle.length + 1;
        }
    }

    return -1;
};

function preprocess(needle) {
    var p = [0, 0];

    // length of substring from the beginning of needle
    var j = 0;

    for (var i = 1; i < needle.length; i += 1) {
        // compare the prefix and suffix of substring ends at i
        while (j > 0 && needle[i] !== needle[j]) {
            // move to compare the prefix of prefix
            j = p[j];
        }
        if (needle[i] === needle[j]) {
            j += 1;
        }
        p[i + 1] = j;
    }

    return p;
}

console.log(strStr('bbaa', 'abcadcabc'))
console.log(strStr('bbaa', 'aaaba'))
