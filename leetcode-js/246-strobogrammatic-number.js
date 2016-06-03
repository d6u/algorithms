const MAP = {
    '96': true,
    '69': true,
    '88': true,
    '11': true,
    '00': true,
};

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    for (let i = 0, j = num.length - 1; i <= j; i += 1, j -= 1) {
        if (!MAP[`${num[i]}${num[j]}`]) {
            return false;
        }
    }

    return true;
};
