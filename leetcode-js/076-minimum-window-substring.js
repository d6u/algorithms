/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var sl = s.length;
    var tl = t.length;
    var needToFind = makeArray(122, 0);
    var i;

    for (i = 0; i < tl; i++) {
        needToFind[charToInt(t[i])] += 1;
    }

    var hasFound = makeArray(122, 0);
    var minWindowLen = sl;
    var minWindowBegin = 0;
    var windowLen;
    var count = 0;
    var begin;
    var end;
    var beginCharInt;
    var endCharInt;

    for (begin = 0, end = 0; end < sl; end++) {
        endCharInt = charToInt(s[end]);

        if (needToFind[endCharInt] === 0) {
            continue;
        }

        hasFound[endCharInt] += 1;

        if (hasFound[endCharInt] <= needToFind[endCharInt]) {
            count += 1;
        }

        if (count === tl) {
            beginCharInt = charToInt(s[begin]);

            while (needToFind[beginCharInt] === 0 || hasFound[beginCharInt] > needToFind[beginCharInt]) {
                if (hasFound[beginCharInt] > needToFind[beginCharInt]) {
                    hasFound[beginCharInt] -= 1;
                }
                begin += 1;
                beginCharInt = charToInt(s[begin]);
            }

            windowLen = end - begin + 1;

            if (windowLen < minWindowLen) {
                minWindowBegin = begin;
                minWindowLen = windowLen;
            }
        }
    }

    return count === tl ? s.substr(minWindowBegin, minWindowLen) : '';
};

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}

function charToInt(c) {
  return c.charCodeAt(0) - 65;
}
