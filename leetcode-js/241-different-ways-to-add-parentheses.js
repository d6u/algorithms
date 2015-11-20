/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    var result = [];
    var size = input.length;
    for (var i = 0; i < size; i++) {
        var cur = input[i];
        if (cur === '+' || cur === '-' || cur === '*') {
            var result1 = diffWaysToCompute(input.substr(0, i));
            var result2 = diffWaysToCompute(input.substr(i+1));
            for (var n1 of result1) {
                for (var n2 of result2) {
                    if (cur === '+') {
                        result.push(n1 + n2);
                    } else if (cur === '-') {
                        result.push(n1 - n2);
                    } else {
                        result.push(n1 * n2);
                    }
                }
            }
        }
    }

    if (result.length === 0) {
        result.push(parseInt(input));
    }

    return result;
};
