public class WordDistance {

    private Map<String, List<Integer>> map;

    public WordDistance(String[] words) {
        map = new HashMap<>();

        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            if (!map.containsKey(word)) {
                map.put(word, new ArrayList<>());
            }
            map.get(word).add(i);
        }
    }

    public int shortest(String word1, String word2) {
        List<Integer> a1 = map.get(word1);
        List<Integer> a2 = map.get(word2);
        int i = 0;
        int j = 0;
        int min = Integer.MAX_VALUE;
        while (i < a1.size() && j < a2.size()) {
            min = Math.min(min, Math.abs(a1.get(i) - a2.get(j)));
            if (a1.get(i) < a2.get(j)) {
                i++;
            } else {
                j++;
            }
        }
        return min;
    }
}

// Your WordDistance object will be instantiated and called as such:
// WordDistance wordDistance = new WordDistance(words);
// wordDistance.shortest("word1", "word2");
// wordDistance.shortest("anotherWord1", "anotherWord2");
