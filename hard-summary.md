# Hard Problems Summary

- [146. LRU Cache](#146-lru-cache)
- [126. Word Ladder II](#126-word-ladder-ii)
- [212. Word Search II](#212-word-search-ii)

## 146. LRU Cache

1. Use double linked list (has reference to both previous and next item) to access head (most recent) and tail (least recent) in O(1) time.
    - Remove least used item in O(1) time.
    - Add new item in O(1) time.
    - Double linked list can remove any node in O(1), when already has the reference of the node.
2. Use hash table to access any key-node pairs in O(1) time.
3. Maintain a counter to keep track of capacity.
4. When get a key, move the node to head (remove then add) in O(1).
5. When set a key-value, insert node to head, pop tail if out of capacity.

## 126. Word Ladder II

1. Build a graph of words, where neighbours are words with one letter difference.
2. Add begin word to the list.
3. Build from end word, so it will finish at being word. This will make building solution from begin word easier (solutions are from begin to end).
4. While building graph, removing word from set, so it won't be used again.
5. To handle large word list, when looking for neighbour words, we can iterate through 26 English letters (changing one character at once and see if the word is in the list) to avoid iterating through all words.
6. Stop when begin word is among the new neighbours.

## 212. Word Search II

1. Build a trie from words to be found, to avoid duplicate character matchings.
    - Root should be empty string.
2. Use backtrack to iterating though all cells in the matrix for words.
    - When a word is found, remove it from trie.
