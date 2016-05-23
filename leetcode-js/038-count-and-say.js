/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    'use strict';

    if (n === 1) {
        return '1';
    }

    let i = 1;
    let result = '1';

    while (i < n) {
        result = say(result);
        i += 1;
    }

    return result;
};

function say(str) {
    'use strict';

    let count = 1;
    let prev = str[0];
    let result = '';

    for (let i = 1; i < str.length; i += 1) {
        if (prev === str[i]) {
            count += 1;
        } else {
            result += `${count}${prev}`;
            prev = str[i];
            count = 1;
        }
    }

    result += `${count}${prev}`;

    return result;
}
