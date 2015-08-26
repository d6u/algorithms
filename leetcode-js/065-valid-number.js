/**
 * @param  {string}  s
 * @return {boolean}
 */
var isNumber = function(s) {
  var _s = s.trim();
  if (!_s) return false;
  return !isNaN(Number(_s));
};
