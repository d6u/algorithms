public class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, Set<String> wordList) {
        wordList.add(beginWord);

        Map<String, Node> current = new HashMap<>();
        current.put(endWord, new Node(endWord));

        while (!current.containsKey(beginWord)) {
            Map<String, Node> next = new HashMap<>();

            for (Map.Entry<String, Node> entry : current.entrySet()) {
                String word = entry.getKey();
                Node node = entry.getValue();
                addWord(wordList, word, node, next);
            }

            if (next.isEmpty()) {
                return new LinkedList<>();
            }

            for (String word : next.keySet()) {
                wordList.remove(word);
            }

            current = next;
        }

        List<List<String>> res = new LinkedList<>();
        List<String> solution = new LinkedList<>();
        solution.add(beginWord);

        extractPath(endWord, current.get(beginWord), solution, res);

        return res;
    }

    class Node {
        String word;
        List<Node> neighbours = new LinkedList<>();

        Node(String word) {
            this.word = word;
        }
    }

    void addWord(Set<String> wordList, String currentWord, Node currentNode, Map<String, Node> next) {
        for (int i = 0; i < currentWord.length(); i++) {
            for (int j = 0; j < 26; j++) {
                String word = currentWord.substring(0, i) + (char) (j + 'a') + currentWord.substring(i + 1);
                if (wordList.contains(word)) {
                    if (!next.containsKey(word)) {
                        next.put(word, new Node(word));
                    }
                    next.get(word).neighbours.add(currentNode);
                }
            }
        }
    }

    void extractPath(String endWord, Node currentNode, List<String> solution, List<List<String>> res) {
        if (currentNode.word == endWord) {
            res.add(new LinkedList<>(solution));
            return;
        }

        for (Node node : currentNode.neighbours) {
            solution.add(node.word);
            extractPath(endWord, node, solution, res);
            solution.remove(solution.size() - 1);
        }
    }
}
