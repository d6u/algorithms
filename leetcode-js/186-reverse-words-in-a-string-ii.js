/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
    reverse(str, 0, str.length - 1);

    var start = 0;
    var end = -1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            reverse(str, start, i - 1);
            start = i + 1;
        }
    }

    reverse(str, start, str.length - 1);
};

function reverse(str, start, end) {
    while (start < end) {
        var tmp = str[start];
        str[start] = str[end];
        str[end] = tmp;
        start += 1;
        end -= 1;
    }
}
