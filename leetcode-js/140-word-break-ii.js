/**
 * @param  {string}      s
 * @param  {set<string>} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  var len = s.length;
  var breaks = makeArray(len, () => []);
  var i;
  var word;
  var wordLen;

  for (i = 0; i < len; i++) {
    for (word of wordDict) {
      wordLen = word.length;

      if (i + 1 < wordLen) {
        continue;
      }

      if (i - wordLen >= 0 && breaks[i - wordLen].length === 0) {
        continue;
      }

      if (s.substr(i - wordLen + 1, wordLen) === word) {
        breaks[i].push(wordLen);
      }
    }
  }

  var result = [];

  if (breaks[len - 1].length !== 0) {
    generateResult(s, len - 1, 0, breaks, [], result);
  }

  return result;
};

function generateResult(s, k, wordNum, breaks, wordLenList, result) {
  var start;
  var sentence;
  var i;
  var wordLen;

  if (k < 0) {
    start = 0;
    sentence = '';
    for (i = wordNum - 1; i >= 0; i--) {
      sentence += s.substr(start, wordLenList[i]);
      if (i !== 0) {
        sentence += ' ';
      }
      start += wordLenList[i];
    }
    result.push(sentence);
  } else {
    for (wordLen of breaks[k]) {
      wordLenList[wordNum] = wordLen;
      generateResult(s, k - wordLen, wordNum + 1, breaks, wordLenList, result);
    }
  }
}

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
