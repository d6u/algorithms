/**
 * @param  {string}   s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  var results = [];
  findIpAddr(s, 0, [], results);
  return results;
};

function findIpAddr(s, index, nums, results) {
  if (nums.length === 4) {
    if (index === s.length) {
      results.push(nums.join('.'));
    }
    return;
  }

  var curNum = '';

  for (var i = index; i < s.length && i < index + 3; i++) {
    curNum += s[i];
    if (isValid(curNum)) {
      findIpAddr(s, i + 1, nums.concat([curNum]), results);
    }
  }
}

function isValid(s) {
  if (s[0] === '0' && s.length !== 1) return false;
  if (s.length === 3 && parseInt(s) > 255) return false;
  return true;
}
