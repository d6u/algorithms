/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var a1 = version1.split('.').map(n => parseInt(n));
    var a2 = version2.split('.').map(n => parseInt(n));

    var i = 0;

    while (i < a1.length && i < a2.length) {
        if (a1[i] > a2[i]) return 1;
        if (a1[i] < a2[i]) return -1;
        i += 1;
    }

    if (a1[i]) return 1;
    if (a2[i]) return -1;
    return 0;
};
