/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    'use strict';

    const parts1 = version1.split('.').map(v => parseInt(v));
    const parts2 = version2.split('.').map(v => parseInt(v));

    let i = 0;

    for (; i < parts1.length && i < parts2.length; i += 1) {
        if (parts1[i] > parts2[i]) {
            return 1;
        }
        if (parts1[i] < parts2[i]) {
            return -1;
        }
    }

    if (i < parts1.length) {
        for (let j = i; j < parts1.length; j += 1) {
            if (parts1[j] > 0) {
                return 1;
            }
        }
    }

    if (i < parts2.length) {
        for (let j = i; j < parts2.length; j += 1) {
            if (parts2[j] > 0) {
                return -1;
            }
        }
    }

    return 0;
};
