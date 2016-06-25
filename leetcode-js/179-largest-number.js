/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if (!nums.length) {
        return '';
    }

    const snums = nums.map((n) => n.toString()).sort((a, b) => {
        const s1 = a + b;
        const s2 = b + a;
        return s1.localeCompare(s2);
    });

    if (snums[snums.length - 1][0] === '0') {
        return '0';
    }

    let result = '';

    for (const s of snums) {
        result = s + result;
    }

    return result;
};
