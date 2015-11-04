/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    var results = makeArray(num1.length + num2.length, '0');
    var i1;
    var i2;
    var carry;
    var topNum;

    for (i1 = 0; i1 < num1.length; i1++) {
        topNum = parseInt(num1[i1]);
        carry = 0;

        for (i2 = 0; i2 < num2.length; i2++) {
            carry += parseInt(num2[i2]) * topNum + parseInt(results[i1+i2]);
            results[i1+i2] = (carry % 10).toString();
            carry = Math.floor(carry / 10);
        }

        if (carry !== 0) {
            results[num2.length + i1] = carry.toString();
        }
    }

    results.reverse();

    var count = 0;

    while (count < results.length - 1 && results[count] === '0') {
        count += 1;
    }

    return results.slice(count).join('');
};

function makeArray(size, filler) {
    var arr = Array(size);
    var i;
    for (i = 0; i < arr.length; i++) {
        arr[i] = typeof filler === 'function' ? filler() : filler;
    }
    return arr;
}
