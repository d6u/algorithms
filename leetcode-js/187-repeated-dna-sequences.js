/**
 * @param  {string}   s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var results = [];
    var dict = new Map();
    var map = {
        'A': 0,
        'C': 1,
        'G': 2,
        'T': 3
    };
    var h = 0;

    for (var i = 0; i < s.length; i++) {
        h = (h << 2) | map[s[i]];
        if (i >= 9) {
            h &= (1 << 20) - 1;
            if (!dict.get(h)) {
                dict.set(h, 1);
            } else if (dict.get(h) === 1) {
                results.push(s.substr(i-9, 10));
                dict.set(h, 2);
            }
        }
    }

    return results;
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAA"));
