/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    return solve(s, wordDict, new Map());
};

function solve(s, wordDict, cache) {
    if (cache.has(s)) {
        return cache.get(s);
    }
    var len = s.length;
    var result = [];
    if (wordDict.has(s)) {
        result.push(s);
    }
    for (var i = 1; i < len; i += 1) {
        var curr = s.substring(i);
        if (wordDict.has(curr)) {
            var strs = solve(s.substring(0, i), wordDict, cache);
            for (var str of strs) {
                result.push(str + ' ' + curr);
            }
        }
    }
    cache.set(s, result);
    return result;
}

// console.log(wordBreak("catsanddog", new Set(["cat","cats","and","sand","dog"])))
// console.log(wordBreak("aaaaaaaaaaabaaaaaaaaaaaaaa", new Set(["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])))
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", new Set(["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])))
