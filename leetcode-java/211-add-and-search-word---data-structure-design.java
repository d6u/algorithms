public class WordDictionary {

    private class WordNode {
        boolean isLeaf = false;
        WordNode[] children = new WordNode[26];
    }

    private WordNode root = new WordNode();

    // Adds a word into the data structure.
    public void addWord(String word) {
        WordNode node = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (node.children[c - 'a'] == null) {
                node.children[c - 'a'] = new WordNode();
            }
            node = node.children[c - 'a'];
        }
        node.isLeaf = true;
    }

    // Returns if the word is in the data structure. A word could
    // contain the dot character '.' to represent any one letter.
    public boolean search(String word) {
        return search(word, 0, root);
    }

    private boolean search(String word, int index, WordNode node) {
        if (index == word.length()) {
            return node.isLeaf;
        }

        for (int i = index; i < word.length(); i++) {
            char c = word.charAt(i);
            if (c == '.') {
                for (WordNode child : node.children) {
                    if (child != null) {
                        if (search(word, i + 1, child)) {
                            return true;
                        }
                    }
                }
                return false;
            } else {
                if (node.children[c - 'a'] == null) {
                    return false;
                }
                node = node.children[c - 'a'];
            }
        }

        return node.isLeaf;
    }
}
