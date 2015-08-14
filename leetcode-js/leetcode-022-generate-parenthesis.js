/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var r = [];
  if (n === 0) return r;
  gp('', 0, 0, n, r);
  return r;
};

function gp(str, l, r, n, res) {
  if (l > n) return;
  if (l === n && r === n) {
    res.push(str);
  } else {
    gp(str + '(', l + 1, r, n, res);
    if (l > r) {
      gp(str + ')', l, r + 1, n, res);
    }
  }
}
