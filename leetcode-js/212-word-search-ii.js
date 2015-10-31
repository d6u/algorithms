/**
 * @param  {character[][]} board
 * @param  {string[]}      words
 * @return {string[]}
 */
var findWords = function (board, words) {
  var res = [];
  if (!board || !board.length || !board[0].length || !words || !words.length) {
    return res;
  }

  var visited = makeArray(board.length, () => makeArray(board[0].length, false));
  var noDuplicatedInput = new Set(words);
  var trie = new Trie(noDuplicatedInput);
  var i;
  var j;

  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[0].length; j++) {
      search(board, i, j, '', visited, trie, res);
    }
  }

  return res;
};

function search(board, i, j, str, visited, trie, res) {
  var newStr;
  var endNode;

  if (i < board.length && i >= 0 && j < board[0].length && j >=0 && !visited[i][j]) {
    newStr = str + board[i][j];
    endNode = trie.startWith(newStr);
    if (endNode != null) {
      if (endNode.leaf) {
        res.push(newStr);
        endNode.leaf = false;
      }
      visited[i][j] = true;
      search(board, i+1, j, newStr, visited, trie, res);
      search(board, i-1, j, newStr, visited, trie, res);
      search(board, i, j+1, newStr, visited, trie, res);
      search(board, i, j-1, newStr, visited, trie, res);
      visited[i][j] = false;
    }
  }
}

function Trie(set) {
  this.root = new TrieNode();
  for (var str of set) {
    this.add(str);
  }
}

Trie.prototype.add = function (str) {
  var curRoot = this.root;
  var i;
  for (i = 0; i < str.length; i++) {
    if (curRoot.children.get(str.charAt(i)) == null) {
      curRoot.children =
    }
  }
};

function TrieNode(ch) {
  this.leaf = null;
  this.children = new Map();
  this.ch = ch;
}

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}
