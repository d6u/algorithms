/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    if (!num.length) {
        return [];
    }
    const rst = [];
    helper(rst, '', num, target, 0, 0, 0);
    return rst;
};

function helper(rst, path, num, target, pos, evaluate, multed) {
    if (pos === num.length) {
        if (target === evaluate) {
            rst.push(path);
        }
        return;
    }
    for (let i = pos; i < num.length; i += 1) {
        if (i !== pos && num[pos] === '0') {
            break;
        }
        const cur = parseInt(num.substring(pos, i + 1));
        if (pos === 0) {
            helper(rst, path + cur, num, target, i + 1, cur, cur);
        } else {
            helper(rst, path + '+' + cur, num, target, i + 1, evaluate + cur, cur);
            helper(rst, path + '-' + cur, num, target, i + 1, evaluate - cur, -cur);
            helper(rst, path + '*' + cur, num, target, i + 1, evaluate - multed + multed * cur, multed * cur);
        }
    }
}

console.log(addOperators("232", 8));
