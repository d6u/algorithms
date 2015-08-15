/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    return s.length;
  }

  var r = 0;
  var start = 0;
  var flags = Array(26);
  var i;
  var j;
  var c;
  var c2;

  for (i = 0; i < flags.length; i++) {
    flags[i] = false;
  }

  for (i = 0; i < s.length; i++) {
    c = s.charCodeAt(i) - 97;

    if (flags[c]) {
      r = Math.max(r, i - start);

      for (j = start; j < i; j++) {
        c2 = s.charCodeAt(j) - 97;
        if (c2 === c) {
          start = j + 1;
          break;
        }
        flags[c2] = false;
      }

    } else {
      flags[c] = true;
    }
  }

  return Math.max(s.length - start, r);
};

console.log(lengthOfLongestSubstring("pwwkew"));
