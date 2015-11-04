/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var dict = {};
    var i;
    var str;

    for (i = 0; i < strs.length; i++) {
        str = strs[i].split('').sort().join('');
        dict[str] ? dict[str].push(strs[i]) : (dict[str] = [strs[i]]);
    }

    return Object.keys(dict).map((key) => dict[key].sort());
};
