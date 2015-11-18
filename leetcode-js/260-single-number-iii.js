/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var aXorb = 0;

    for (var item of nums) {
        aXorb ^= item;
    }

    var lastBit = (aXorb & (aXorb - 1)) ^ aXorb;
    var intA = 0;
    var intB = 0;

    for (item of nums) {
        if (item & lastBit) {
            intA = intA ^ item;
        } else {
            intB = intB ^ item;
        }
    }

    return [intA, intB];
};
