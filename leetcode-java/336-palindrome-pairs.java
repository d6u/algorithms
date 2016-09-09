class Solution {
    class TrieNode {
        int index = -1;
        TrieNode[] next = new TrieNode[26];
        List<Integer> indexes = new LinkedList<>();
    }

    public List<List<Integer>> palindromePairs(String[] words) {
        TrieNode root = buildTrie(words);
        List<List<Integer>> res = new LinkedList<>();

        for (int i = 0; i < words.length; i++) {
            search(words[i], i, root, res);
        }

        return res;
    }

    TrieNode buildTrie(String[] words) {
        TrieNode root = new TrieNode();
        for (int i = 0; i < words.length; i++) {
            addWord(root, words[i], i);
        }
        return root;
    }

    void addWord(TrieNode node, String word, int index) {
        for (int i = word.length() - 1; i >= 0; i--) {
            if (isPalindrome(word, 0, i)) {
                node.indexes.add(index);
            }
            if (node.next[word.charAt(i) - 'a'] == null) {
                node.next[word.charAt(i) - 'a'] = new TrieNode();
            }
            node = node.next[word.charAt(i) - 'a'];
        }
        node.indexes.add(index);
        node.index = index;
    }

    boolean isPalindrome(String word, int left, int right) {
        while (left < right) {
            if (word.charAt(left) != word.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    void search(String word, int index, TrieNode node, List<List<Integer>> res) {
        for (int i = 0; i < word.length(); i++) {
            if (node.index >= 0 && node.index != index && isPalindrome(word, i, word.length() - 1)) {
                res.add(Arrays.asList(index, node.index));
            }
            node = node.next[word.charAt(i) - 'a'];
            if (node == null) {
                return;
            }
        }

        for (int i : node.indexes) {
            if (i != index) {
                res.add(Arrays.asList(index, i));
            }
        }
    }
}
