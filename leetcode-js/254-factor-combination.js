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
    var i = solution.length === 0 ? 2 : solution[solution.length-1];

    for (; i <= Math.floor(n/i); i++) {
        if (n % i === 0) {
            solution.push(i);
            solution.push(Math.floor(n/i));
            results.push(solution.slice(0));
            solution.pop();
            getResults(Math.floor(n/i), solution, results);
            solution.pop();
        }
    }
}
