/**
 * @param  {string} beginWord
 * @param  {string} endWord
 * @param  {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {
  'use strict';

  wordDict.add(endWord);
  let q = [];
  q.push([beginWord, 1]);

  while (q.length) {
    let pair = q.shift();
    let s = pair[0];
    let l = pair[1];
    if (s === endWord) return l;

    let neighbors = findNeighbors(s, wordDict);
    for (let k = 0; k < neighbors.length; k++) {
      q.push([neighbors[k], l + 1]);
    }
  }

  return 0;
};

function findNeighbors(s, wordDict) {
  'use strict';

  let r = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    for (let j = 97; j < 123; j++) {
      let a = String.fromCharCode(j);
      if (c === a) continue;
      let s2 = replaceAt(s, i, a);
      if (wordDict.has(s2)) {
        r.push(s2);
        wordDict.delete(s2);
      }
    }
  }

  return r;
}

function replaceAt(str, index, char) {
  return str.slice(0, index) + char + str.slice(index + 1);
}
