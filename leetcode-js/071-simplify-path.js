/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    'use strict';

    const parts = path.split('/');
    const stack = [];

    for (const part of parts) {
        switch (part) {
        case '':
        case '.':
            break;
        case '..':
            stack.pop();
            break;
        default:
            stack.push(part);
            break;
        }
    }

    return '/' + stack.join('/');
};
