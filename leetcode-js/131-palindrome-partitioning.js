/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    dfs(s, 0, [], result);
    return result;
};

function dfs(s, index, solution, result) {
    if (index === s.length) {
        result.push(solution);
        return;
    }

    for (let i = index; i < s.length; i += 1) {
        if (isPal(s, index, i)) {
            dfs(s, i + 1, solution.concat(s.substring(index, i + 1)), result);
        }
    }
}

function isPal(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        } else {
            left += 1;
            right -= 1;
        }
    }
    return true;
}
