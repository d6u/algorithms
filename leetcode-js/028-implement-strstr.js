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

    var h = haystack.length;
    var n = needle.length;
    var next = table(needle);
    var i = 0;
    var success;
    var j;

    while (i <= h - n) {
        success = true;

        for (j = 0; j < n; j++) {
            if (needle[0] !== haystack[i]) {
                success = false;
                i += 1;
                break;
            } else if (needle[j] !== haystack[i+j]) {
                success = false;
                i = i + j - next[j-1];
                break;
            }
        }

        if (success) {
            return i;
        }
    }

    return -1;
};

function table(needle) {
    var arr = [0];
    var i;
    var index;

    for (i = 1; i < needle.length; i++) {
        index = arr[i-1];

        while (index > 0 && needle[index] !== needle[i]) {
            index = arr[index-1];
        }

        if (needle[index] === needle[i]) {
            arr[i] = arr[i-1] + 1;
        } else {
            arr[i] = 0;
        }
    }

    return arr;
}
