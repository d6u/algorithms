/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
    'use strict';

    reverseStr(str, 0, str.length - 1);

    let start = 0;

    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === ' ') {
            reverseStr(str, start, i - 1);
            start = i + 1;
        }
    }

    reverseStr(str, start, str.length - 1);
};

function reverseStr(str, start, end) {
    'use strict';

    while (start < end) {
        const tmp = str[start];
        str[start] = str[end];
        str[end] = tmp;
        start += 1;
        end -= 1;
    }
}
