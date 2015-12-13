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
 * @returns {string}
 */
var intToRoman = function (num) {
    var roman = '';
    var i = 0;
    var r;
    var j;

    while (num > 0) {
        r = Math.floor(num / map[i][0]);
        if (r > 0) {
            for (j = 0; j < r; j++) {
                roman += map[i][1];
            }
            num -= r * map[i][0];
        } else {
            i += 1;
        }
    }

    return roman;
};

console.log(intToRoman(1021));
