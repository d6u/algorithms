/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 1. Count digit "1" on each bit,
    // n1 means 1s appeared only once
    // n2 means 1s appeared twice
    let n1 = 0;
    let n2 = 0;

    for (const n of nums) {
        // 2. Record 1s that appeared twice
        n2 |= n1 & n;
        console.log('n2', n2.toString(2));
        // 3. Clean out 1s that recorded in n2
        n1 ^= n;
        console.log('n1', n1.toString(2));
        const n3 = n1 & n2;
        n1 ^= n3;
        n2 ^= n3;
    }

    return n1;
};

console.log(singleNumber([2, 2, 2]))
