/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var visited = makeArray(board.length, () => makeArray(board[0].length, false));
    var x;
    var y;

    for (y = 0; y < board.length; y++) {
        for (x = 0; x < board[0].length; x++) {
            if (findWord(x, y, board, 0, word, visited)) {
                return true;
            }
        }
    }

    return false;
};

function findWord(x, y, board, i, word, visited) {
    if (i === word.length) return true;

    if (x < 0 || x >= board[0].length || y < 0 || y >= board.length ||
        visited[y][x] || board[y][x] !== word[i]) {
        return false;
    }

    visited[y][x] = true;
    if (findWord(x+1, y, board, i+1, word, visited)) return true;
    if (findWord(x-1, y, board, i+1, word, visited)) return true;
    if (findWord(x, y+1, board, i+1, word, visited)) return true;
    if (findWord(x, y-1, board, i+1, word, visited)) return true;
    visited[y][x] = false;

    return false;
}

function makeArray(size, filler) {
  var arr = Array(size);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i] = typeof filler === 'function' ? filler() : filler;
  }
  return arr;
}
