public class Solution {
    class TrieNode {
        String word;
        TrieNode[] children = new TrieNode[26];
    }

    public List<String> findWords(char[][] board, String[] words) {
        TrieNode root = buildTrie(words);
        List<String> res = new LinkedList<>();
        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                char c = board[i][j];
                if (root.children[c - 'a'] != null) {
                    dfs(board, m, n, root.children[c - 'a'], i, j, res);
                }
            }
        }

        return res;
    }

    TrieNode buildTrie(String[] words) {
        TrieNode root = new TrieNode();
        for (String word : words) {
            TrieNode node = root;
            for (char c : word.toCharArray()) {
                if (node.children[c - 'a'] == null) {
                    node.children[c - 'a'] = new TrieNode();
                }
                node = node.children[c - 'a'];
            }
            node.word = word;
        }
        return root;
    }

    void dfs(char[][] board, int m, int n, TrieNode trie, int i, int j, List<String> res) {
        if (trie.word != null) {
            res.add(trie.word);
            trie.word = null;
        }

        char original = board[i][j];
        board[i][j] = '#';

        if (i > 0 && board[i - 1][j] != '#' && trie.children[board[i - 1][j] - 'a'] != null) {
            dfs(board, m, n, trie.children[board[i - 1][j] - 'a'], i - 1, j, res);
        }
        if (i < m - 1 && board[i + 1][j] != '#' && trie.children[board[i + 1][j] - 'a'] != null) {
            dfs(board, m, n, trie.children[board[i + 1][j] - 'a'], i + 1, j, res);
        }
        if (j > 0 && board[i][j - 1] != '#' && trie.children[board[i][j - 1] - 'a'] != null) {
            dfs(board, m, n, trie.children[board[i][j - 1] - 'a'], i, j - 1, res);
        }
        if (j < n - 1 && board[i][j + 1] != '#' && trie.children[board[i][j + 1] - 'a'] != null) {
            dfs(board, m, n, trie.children[board[i][j + 1] - 'a'], i, j + 1, res);
        }

        board[i][j] = original;
    }
}
