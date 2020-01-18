class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        if (!wordList.contains(endWord)) {
            return new LinkedList();
        }
        
        Set<String> wordSet = new HashSet(wordList);
        wordSet.remove(endWord);
        wordSet.add(beginWord);
        
        Map<String, Set<String>> graph = new HashMap();
        
        // BFS

        Set<String> currentLevel = new HashSet();
        currentLevel.add(endWord);
        
        while (!currentLevel.contains(beginWord)) {
            Set<String> nextLevel = new HashSet();

            for (String word : currentLevel) {
                addWord(word, wordSet, graph, nextLevel);
            }
            
            if (nextLevel.isEmpty()) {
                return new LinkedList();
            }
            
            for (String word : nextLevel) {
                wordSet.remove(word);
            }
            
            currentLevel = nextLevel;
        }
        
        // DFS
        
        List<List<String>> result = new LinkedList();
        
        List<String> path = new LinkedList();
        path.add(beginWord);
        
        extractPaths(result, endWord, graph, path, beginWord);
        
        return result;
    }
    
    private void addWord(
        String word, 
        Set<String> wordSet,
        Map<String, Set<String>> graph,
        Set<String> nextLevel) {
        
        for (int i = 0; i < word.length(); i++) {
            char[] letters = word.toCharArray();
            
            for (char c = 'a'; c <= 'z'; c++) {
                letters[i] = c;
                
                String newWord = new String(letters);
                
                if (wordSet.contains(newWord)) {
                    if (!graph.containsKey(newWord)) {
                        graph.put(newWord, new HashSet());
                    }
                    
                    graph.get(newWord).add(word);

                    if (!nextLevel.contains(newWord)) {
                        nextLevel.add(newWord);
                    }
                }
            }
        }
    }
    
    private void extractPaths(
        List<List<String>> result,
        String endWord, 
        Map<String, Set<String>> graph,
        List<String> path,
        String word) {
        
        if (word == endWord) {
            result.add(new LinkedList(path));
            return;
        }
        
        for (String currentWord : graph.get(word)) {
            path.add(currentWord);
            extractPaths(result, endWord, graph, path, currentWord);
            path.remove(path.size() - 1);
        }
    }
}
