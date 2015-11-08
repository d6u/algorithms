/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    var results = [];
    var queue = [s];
    var stop = false;
    var el;
    var i;
    var cur;

    var visited;
    var visitedLen = s.length;

    while (queue.length > 0) {
        el = queue.shift();
        if (isValid(el)) {
            stop = true;
            results.push(el);
        }
        if (stop) {
            continue;
        }
        if (el.length - 1 !== visitedLen) {
            visited = new Set();
            visitedLen = el.length - 1;
        }
        for (i = 0; i < el.length; i++) {
            if (el[i] !== '(' && el[i] !== ')') {
                continue;
            }
            cur = el.slice(0, i) + el.slice(i+1);
            if (!visited.has(cur)) {
                visited.add(cur);
                queue.push(cur);
            }
        }
    }

    return results.length === 0 ? [''] : results; };

function isValid(s) {
    if (s.length === 0) return false;

    var stack = [];
    var i;
    var c;

    for (i = 0; i < s.length; i++) {
        c = s[i];
        if (c !== '(' && c !== ')') {
            continue;
        }
        if (c === '(') {
            stack.push(c);
            continue;
        }
        if (stack[stack.length-1] === '(') {
            stack.pop();
            continue;
        }
        return false;
    }

    return stack.length === 0;
}

console.log(removeInvalidParentheses("(j))("));
