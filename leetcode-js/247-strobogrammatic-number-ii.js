/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    return helper(n, n);
};

function helper(n, target) {
    if (n === 0) {
        return [''];
    }
    if (n === 1) {
        return ['1', '8', '0'];
    }

    const list = helper(n - 2, target);
    const result = [];

    for (const str of list) {
        if (n !== target) {
            result.push(`0${str}0`);
        }
        result.push(`1${str}1`);
        result.push(`6${str}9`);
        result.push(`9${str}6`);
        result.push(`8${str}8`);
    }

    return result;
}
