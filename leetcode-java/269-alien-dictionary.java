public class Solution {
    public String alienOrder(String[] words) {
        if (words.length == 1) {
            return words[0];
        }

        Map<Character, List<Character>> graph = new HashMap<>();

        for (int i = 1; i < words.length; i++) {
            boolean found = false;

            for (int j = 0; j < Math.max(words[i - 1].length(), words[i].length()); j++) {
                if (j < words[i - 1].length() && !graph.containsKey(words[i - 1].charAt(j))) {
                    graph.put(words[i - 1].charAt(j), new ArrayList<>());
                }

                if (j < words[i].length() && !graph.containsKey(words[i].charAt(j))) {
                    graph.put(words[i].charAt(j), new ArrayList<>());
                }

                if (!found
                    && j < words[i - 1].length()
                    && j < words[i].length()
                    && words[i - 1].charAt(j) != words[i].charAt(j)) {

                    graph.get(words[i - 1].charAt(j)).add(words[i].charAt(j));
                    found = true;
                }
            }
        }

        return topologicalSort(graph);
    }

    String topologicalSort(Map<Character, List<Character>> graph) {
        Map<Character, Integer> indegrees = new HashMap<>();

        for (Map.Entry<Character, List<Character>> entry : graph.entrySet()) {
            char key = entry.getKey();
            List<Character> nodes = entry.getValue();

            if (!indegrees.containsKey(key)) {
                indegrees.put(key, 0);
            }

            for (char c : nodes) {
                if (!indegrees.containsKey(c)) {
                    indegrees.put(c, 1);
                } else {
                    indegrees.put(c, indegrees.get(c) + 1);
                }
            }
        }

        Queue<Character> queue = new LinkedList<>();

        for (Map.Entry<Character, Integer> entry : indegrees.entrySet()) {
            char key = entry.getKey();
            int indegree = entry.getValue();
            if (indegree == 0) {
                queue.offer(key);
            }
        }

        String res = "";

        while (!queue.isEmpty()) {
            char c = queue.poll();

            res += c;

            for (char node : graph.get(c)) {
                indegrees.put(node, indegrees.get(node) - 1);
                if (indegrees.get(node) == 0) {
                    queue.offer(node);
                }
            }
        }

        return res.length() == graph.size() ? res : "";
    }
}
