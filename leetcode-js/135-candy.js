/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if (ratings.length <= 1) {
        return ratings.length;
    }

    const size = ratings.length;

    // 1. All child at least have 1 candy
    const num = Array(size).fill(1);

    // 2. Loop from beginning
    for (let i = 1; i < size; i += 1) {
        // 3. Every child with higher rating should have 1 more candy than
        // previous one
        if (ratings[i] > ratings[i-1]) {
            num[i] = num[i-1] + 1;
        }
    }

    // 4. Loop from tail
    for (let i = size - 1; i > 0; i -= 1) {
        if (ratings[i-1] > ratings[i]) {
            num[i-1] = Math.max(num[i] + 1, num[i-1]);
        }
    }

    let result = 0;

    for (let i = 0; i < size; i += 1) {
        result += num[i];
    }

    return result;
};
