/**
 * @param  {string}  s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  var map = new Map();
  var c;
  var count;

  for (c of s) {
    count = map.get(c);
    map.set(c, count == null ? 1 : count + 1);
  }

  var hasOdd = false;

  for (count of map.values()) {
    if (count % 2 !== 0) {
      if (hasOdd) {
        return false;
      } else {
        hasOdd = true;
      }
    }
  }

  return true;
};
