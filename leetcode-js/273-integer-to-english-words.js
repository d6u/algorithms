var V3 = ['Thousand', 'Million', 'Billion'];

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    'use strict';

    if (num === 0) {
        return 'Zero';
    }

    let strs = [];
    let res = num;
    let i = 0;

    while (res > 0) {
        const cur = res % 1000;
        res = Math.floor(res / 1000);
        if (cur === 0) {
            strs.shift();
        } else {
            strs = translateHundred(cur).concat(strs);
        }
        if (res > 0) {
            strs.unshift(V3[i]);
            i += 1;
        }
    }

    return strs.join(' ');
};

var V1 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var V2 = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

var translateHundred = function (n) {
    var a = Math.floor(n / 100);
    var b = n % 100;
    var c = n % 10;
    var strs = [];

    if (a > 0) {
        strs.push(V1[a]);
        strs.push('Hundred');
    }

    if (b > 0 && b < 20) {
        strs.push(V1[b]);
    } else {
        if (b >= 20) {
            strs.push(V2[Math.floor(b / 10)]);
        }

        if (c > 0) {
            strs.push(V1[c]);
        }
    }

    return strs;
};

console.log(JSON.stringify(numberToWords(1000000010)));
