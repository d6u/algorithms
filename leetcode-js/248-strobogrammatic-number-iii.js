/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
    var count = 0;
    for (var n = low.length; n <= high.length; n++) {
        var rst = helper(n, n);
        for (var num of rst) {
            if ((num.length === low.length && num < low) ||
                (num.length === high.length && num > high))
            {
                continue;
            }
            count += 1;
        }
    }

    return count;
};

function helper(cur, max) {
    if (cur === 0) return [''];
    if (cur === 1) return ['1', '8', '0'];

    var rst = [];
    var center = helper(cur - 2, max);

    for (var i = 0; i < center.length; i++) {
        var tmp = center[i];
        if (cur !== max) rst.push('0' + tmp + '0');
        rst.push('1' + tmp + '1');
        rst.push('6' + tmp + '9');
        rst.push('8' + tmp + '8');
        rst.push('9' + tmp + '6');
    }

    return rst;
}

console.log(strobogrammaticInRange('0', '100000000000000'))
