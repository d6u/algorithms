/**
 * @param  {string} s
 * @param  {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  var sLen = s.length;
  var tLen = t.length;
  var needToFind = makeArray(122, 0);
  var i;

  for (i = 0; i < tLen; i++) {
    needToFind[charToInt(t[i])] += 1;
  }

  var hasFound = makeArray(122, 0);
  var minWindowLen = sLen;
  var minWindowBegin = 0;
  var windowLen;
  var count = 0;
  var begin;
  var end;

  for (begin = 0, end = 0; end < sLen; end++) {
    if (needToFind[charToInt(s[end])] === 0) continue;

    hasFound[charToInt(s[end])] += 1;
    if (hasFound[charToInt(s[end])] <= needToFind[charToInt(s[end])]) {
      count += 1;
    }

    if (count === tLen) {
      while (needToFind[charToInt(s[begin])] === 0 ||
        hasFound[charToInt(s[begin])] > needToFind[charToInt(s[begin])])
      {
        if (hasFound[charToInt(s[begin])] > needToFind[charToInt(s[begin])]) {
          hasFound[charToInt(s[begin])] -= 1;
        }
        begin += 1;
      }

      windowLen = end - begin + 1;
      if (windowLen < minWindowLen) {
        minWindowBegin = begin;
        minWindowLen = windowLen;
      }
    }
  }

  return count === tLen ? s.substr(minWindowBegin, minWindowLen) : '';
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

console.log(minWindow("ADOBECODEBANC", "ABC"));
