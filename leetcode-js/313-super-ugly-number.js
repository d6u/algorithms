/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const result = [1];
    const indexes = Array(primes.length).fill(0);

    for (let i = 1; i < n; i += 1) {
        let min = Infinity;
        for (let j = 0; j < primes.length; j += 1) {
            min = Math.min(min, result[indexes[j]] * primes[j]);
        }
        result[i] = min;
        for (let j = 0; j < primes.length; j += 1) {
            if (result[i] % primes[j] === 0) {
                indexes[j] += 1;
            }
        }
    }

    return result[n-1];
};
