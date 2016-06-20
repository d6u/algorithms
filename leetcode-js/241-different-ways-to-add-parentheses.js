/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    const result = [];

    for (let i = 0; i < input.length; i++) {
        const cur = input[i];

        if (cur === '+' || cur === '-' || cur === '*') {
            const result1 = diffWaysToCompute(input.substr(0, i));
            const result2 = diffWaysToCompute(input.substr(i+1));
            for (const n1 of result1) {
                for (const n2 of result2) {
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
