const pairs = [
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['8', '8'],
    ['9', '6'],
];

/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
    const result = {count: 0};
    for (let len = low.length; len <= high.length; len += 1) {
        dfs(low, high, [], 0, len - 1, result);
    }
    return result.count;
};

function dfs(low, high, chars, left, right, result) {
    if (left > right) {
        const str = chars.join('');
        if ((str.length === low.length && str.localeCompare(low) < 0) ||
            (str.length === high.length && str.localeCompare(high) > 0)) {
            return;
        }
        result.count += 1;
        return;
    }

    for (const p of pairs) {
        chars[left] = p[0];
        chars[right] = p[1];
        if (chars.length !== 1 && chars[0] === '0') {
            continue;
        }
        if (left < right || (left === right && p[0] === p[1])) {
            dfs(low, high, chars, left + 1, right - 1, result);
        }
    }
}

// console.log(strobogrammaticInRange('0', '100000000000000'))
console.log(strobogrammaticInRange('50', '200'))
