const A = 'a'.charCodeAt();

/**
 * @param  {character[][]} board
 * @param  {string[]}      words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const res = [];
    const root = buildTrie(words);
    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[0].length; j += 1) {
            dfs(board, i, j, root, res);
        }
    }
    return res;
};

function dfs(board, i, j, p, res) {
    const c = board[i][j];
    if (c === '#' || !p.next[c.charCodeAt() - A]) {
        return;
    }
    p = p.next[c.charCodeAt() - A];
    if (p.word) {
        res.push(p.word);
        p.word = null;
    }
    board[i][j] = '#';
    if (i > 0) {
        dfs(board, i - 1, j, p, res);
    }
    if (j > 0) {
        dfs(board, i, j - 1, p, res);
    }
    if (i < board.length - 1) {
        dfs(board, i + 1, j, p, res);
    }
    if (j < board[0].length - 1) {
        dfs(board, i, j + 1, p, res);
    }
    board[i][j] = c;
}

function buildTrie(words) {
    const root = new TrieNode();
    for (const w of words) {
        let p = root;
        for (const c of w) {
            const i = c.charCodeAt() - A;
            if (!p.next[i]) {
                p.next[i] = new TrieNode();
            }
            p = p.next[i];
        }
        p.word = w;
    }
    return root;
}

class TrieNode {
    constructor() {
        this.next = [];
        this.word = null;
    }
}

console.log(findWords(["ab","cd"], ["ab","cb","ad","bd","ac","ca","da","bc","db","adcb","dabc","abb","acb"]))
