/**
 * @param  {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  'use strict';

  let ps = path.split('/');
  let stack = [];

  for (let i = 0; i < ps.length; i++) {
    switch (ps[i]) {
      case '':
      case '/':
      case '.':
        break;
      case '..':
        stack.pop();
        break;
      default:
        stack.push(ps[i]);
        break;
    }
  }

  return '/' + stack.join('/');
};
