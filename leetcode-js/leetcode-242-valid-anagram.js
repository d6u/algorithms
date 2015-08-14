/**
 * @param  {string}  s
 * @param  {string}  t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  'use strict';

  if (s.length != t.length) {
    return false;
  }

  let counter_s = [];
  let counter_t = [];

  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt(0) - 97;
    counter_s[code] = counter_s[code] ? counter_s[code] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    let code = t[i].charCodeAt(0) - 97;
    counter_t[code] = counter_t[code] ? counter_t[code] + 1 : 1;
  }

  for (let i = 0; i < counter_t.length; i++) {
    if (counter_t[i] !== counter_s[i]) {
      return false;
    }
  }

  return true;
};
