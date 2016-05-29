/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    'use strict';

    const nums1 = num1.split('').reverse();
    const nums2 = num2.split('').reverse();
    const result = Array(num1.length + num2.length).fill('0');

    for (let i1 = 0; i1 < nums1.length; i1 += 1) {
        const num = parseInt(nums1[i1]);
        let carry = 0;

        for (let i2 = 0; i2 < nums2.length; i2 += 1) {
            carry += parseInt(nums2[i2]) * num + parseInt(result[i1 + i2]);
            result[i1 + i2] = (carry % 10).toString();
            carry = Math.floor(carry / 10);
        }

        if (carry !== 0) {
            result[nums2.length + i1] = carry.toString();
        }
    }

    result.reverse();

    let count = 0;

    while (count < result.length - 1 && result[count] === '0') {
        count += 1;
    }

    return result.slice(count).join('');
};
