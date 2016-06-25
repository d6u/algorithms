/**
 * @constructor
 * Initialize your data structure here.
 */
class TrieNode {
    constructor() {
        this.word = null;
        this.map = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the trie.
     * @param  {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (const c of word) {
            if (!node.map.get(c)) {
                node.map.set(c, new TrieNode());
            }
            node = node.map.get(c);
        }
        node.word = word;
    }

    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for (const c of word) {
            if (!node.map.get(c)) {
                return false;
            }
            node = node.map.get(c);
        }
        return node.word !== null;
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (const c of prefix) {
            if (!node.map.get(c)) {
                return false;
            }
            node = node.map.get(c);
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */
