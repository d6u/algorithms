/**
 * @param  {string}  s
 * @param  {string}  t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  var m = s.length;
  var n = t.length;

  if (m < n) return isOneEditDistance(t, s);
  if (m - n > 1) return false;

  var i = 0;
  var shift = m - n;

  while (i < n && s[i] === t[i]) {
    i += 1;
  }

  if (i === n) return shift > 0;
  if (shift === 0) i += 1;

  while (i < n && s[i+shift] === t[i]) {
    i += 1;
  }

  return i === n;
};

console.log(isOneEditDistance("a", ""));
