/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let aXorb = 0;

    for (var item of nums) {
        aXorb ^= item;
    }

    const lastBit = (aXorb & (aXorb - 1)) ^ aXorb;
    let intA = 0;
    let intB = 0;

    for (item of nums) {
        if (item & lastBit) {
            intA ^= item;
        } else {
            intB ^= item;
        }
    }

    return [intA, intB];
};
