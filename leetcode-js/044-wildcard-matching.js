/**
 * @param  {string}  s
 * @param  {string}  p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var i = 0;
  var j = 0;
  var star = -1;
  var mark = -1;

  while (i < s.length) {
    if (j < p.length && (p[j] === '?' || p[j] === s[i])) {
      i += 1;
      j += 1;
    } else if (j < p.length && p[j] === '*') {
      star = j;
      j += 1;
      mark = i;
    } else if (star !== -1) {
      j = star + 1;
      mark += 1;
      i = mark;
    } else {
      return false;
    }
  }

  while (j < p.length && p[j] === '*') {
    j += 1;
  }

  return j === p.length;
};
