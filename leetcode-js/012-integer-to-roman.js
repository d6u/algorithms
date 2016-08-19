var map = [
    [1000, 'M' ],
    [900 , 'CM'],
    [500 , 'D' ],
    [400 , 'CD'],
    [100 , 'C' ],
    [90  , 'XC'],
    [50  , 'L' ],
    [40  , 'XL'],
    [10  , 'X' ],
    [9   , 'IX'],
    [5   , 'V' ],
    [4   , 'IV'],
    [1   , 'I' ]
];

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = '';
    let i = 0;

    while (num > 0) {
        const quotient = Math.floor(num / map[i][0]);
        if (quotient > 0) {
            for (let j = 0; j < quotient; j += 1) {
                roman += map[i][1];
            }
            num -= quotient * map[i][0];
        } else {
            i += 1;
        }
    }

    return roman;
};

console.log(intToRoman(1021));
