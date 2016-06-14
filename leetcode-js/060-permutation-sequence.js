/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const nums = [];
    const factorials = [1];
    let sum = 1;

    for (let i = 1; i <= n; i += 1) {
        nums.push(i);
        sum *= i;
        factorials[i] = sum;
    }

    k -= 1;

    let result = '';

    for (let i = 1; i <= n; i += 1) {
        const index = Math.floor(k / factorials[n-i]);
        result += nums[index];
        nums.splice(index, 1);
        k -= index * factorials[n-i];
    }

    return result;
};
