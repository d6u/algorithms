/**
 * @param  {string[]}   strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  'use strict';

  let d = {};
  for (let i = 0; i < strs.length; i++) {
    let _s = strs[i].split('').sort().join('');
    d[_s] ? d[_s].push(strs[i]) : (d[_s] = [strs[i]]);
  }

  return Object.keys(d).map(function (key) {
    return d[key].sort();
  });
};
