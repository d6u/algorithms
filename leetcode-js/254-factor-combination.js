/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
    const results = [];
    getResults(n, [], results);
    return results;
};

function getResults(n, solution, results) {
    let i = solution.length === 0 ? 2 : solution[solution.length-1];

    while (i <= Math.floor(n / i)) {
        if (n % i === 0) {
            solution.push(i);
            solution.push(n / i);
            results.push(solution.slice(0));
            solution.pop();
            getResults(n / i, solution, results);
            solution.pop();
        }
        i += 1;
    }
}
