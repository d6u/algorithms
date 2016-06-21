/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    for (let i = 1; i <= Math.floor(num.length / 2); i += 1) {
        for (let j = 1; j <= Math.floor((num.length - 1) / 2); j += 1) {
            if (check(num.substr(0, i), num.substr(i, j), num.substr(i + j))) {
                return true;
            }
        }
    }
    return false;
};

function check(num1, num2, num) {
    if (num1.length > 1 && num1[0] === '0' || num2.length > 1 && num2[0] === '0') {
        return false;
    }
    const sum = add(num1, num2);
    if (num === sum) {
        return true;
    }
    if (num.length <= sum.length || sum !== num.substr(0, sum.length)) {
        return false;
    } else {
        return check(num2, sum, num.substr(sum.length));
    }
}

function add(n, m) {
    return (parseInt(n) + parseInt(m)).toString();
}

console.log(isAdditiveNumber("112358"));
console.log(isAdditiveNumber("101"));
