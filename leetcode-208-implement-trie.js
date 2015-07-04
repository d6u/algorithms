/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
  this.word = null;
  this.map = new Map();
};

var Trie = function() {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param  {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  var node = this.root;
  var i;
  var c;
  for (i = 0; i < word.length; i++) {
    c = word[i];
    if (!node.map.get(c)) {
      node.map.set(c, new TrieNode());
    }
    node = node.map.get(c);
  }
  node.word = word;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  var node = this.root;
  var i;
  var c;
  for (i = 0; i < word.length; i++) {
    c = word[i];
    if (!node.map.get(c)) return false;
    node = node.map.get(c);
  }
  return node.word !== null;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  var node = this.root;
  var i;
  var c;
  for (i = 0; i < prefix.length; i++) {
    c = prefix[i];
    if (!node.map.get(c)) return false;
    node = node.map.get(c);
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */
