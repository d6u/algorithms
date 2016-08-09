/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var sl = s.length;
    var tl = t.length;
    // if (tl > sl) {
    //     return '';
    // }
    var need = Array(128).fill(0);
    var charSet = Array(128).fill(false);
    for (var c of t) {
        need[toCode(c)] += 1;
        charSet[toCode(c)] = true;
    }
    var minBegin = 0;
    var minLen = Infinity;
    var count = tl;
    var i = -1;
    var j = 0;
    while (i < sl && j < sl) {
        if (count) {
            i += 1;
            var code = toCode(s[i]);
            need[code] -= 1;
            if (charSet[code] && need[code] >= 0) {
                count -= 1;
            }
        } else {
            if (minLen > i - j + 1) {
                minLen = i - j + 1;
                minBegin = j;
            }
            var code = toCode(s[j]);
            need[code] += 1;
            if (charSet[code] && need[code] > 0) {
                count += 1;
            }
            j += 1;
        }
    }
    if (minLen === Infinity) {
        return '';
    } else {
        return s.substr(minBegin, minLen);
    }
};

function toCode(char) {
    return char ? char.charCodeAt(0) : 0;
}

console.log(JSON.stringify(minWindow("a", "b")));
console.log(JSON.stringify(minWindow("a", "a")));
console.log(JSON.stringify(minWindow("a", "aa")));
