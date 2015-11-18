/**
 * @constructor
 * @param {string[]} words
 */
var WordDistance = function(words) {
    this.wordInd = {};
    var n = words.length;
    for (var i = 0; i < n; i++) {
        this.wordInd[words[i]] ? this.wordInd[words[i]].push(i) : this.wordInd[words[i]] = [i];
    }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    var indexes1 = this.wordInd[word1];
    var indexes2 = this.wordInd[word2];
    var m = indexes1.length;
    var n = indexes2.length;
    var i = 0;
    var j = 0;
    var dist = Number.MAX_VALUE;
    while (i < m && j < n) {
        dist = Math.min(dist, Math.abs(indexes1[i] - indexes2[j]));
        if (indexes1[i] < indexes2[j]) {
            i += 1;
        } else {
            j += 1;
        }
    }
    return dist;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var wordDistance = new WordDistance(words);
 * wordDistance.shortest("word1", "word2");
 * wordDistance.shortest("anotherWord1", "anotherWord2");
 */
