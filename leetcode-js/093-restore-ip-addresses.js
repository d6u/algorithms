/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    findSolution(s, 0, [], result);
    return result;
};

function findSolution(s, index, currentNums, result) {
    'use strict';

    if (currentNums.length === 4) {
        if (index === s.length) {
            result.push(currentNums.join('.'));
        }
        return;
    }

    let part = '';

    for (let i = index; i < s.length && part.length < 3; i += 1) {
        part += s[i];
        if (isValid(part)) {
            findSolution(s, i + 1, currentNums.concat([part]), result);
        }
    }
}

function isValid(s) {
    if (s[0] === '0' && s.length > 1) {
        return false;
    }
    if (s.length === 3 && parseInt(s) > 255) {
        return false;
    }
    return true;
}

console.log(restoreIpAddresses('0000'));
