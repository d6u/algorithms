/**
  Given an absolute path for a file (Unix-style), simplify it.

  For example,
  path = "/home/", => "/home"
  path = "/a/./b/../../c/", => "/c"

  Corner Cases:
  Did you consider the case where path = "/../"?
  In this case, you should return "/".
  Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
  In this case, you should ignore redundant slashes and return "/home/foo".

  tags: stack, string
 */

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
