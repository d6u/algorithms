public class Solution {
    public List<String> findItinerary(String[][] tickets) {
        Map<String, PriorityQueue<String>> flights = new HashMap<>();

        for (String[] ticket : tickets) {
            flights.putIfAbsent(ticket[0], new PriorityQueue<>());
            flights.get(ticket[0]).add(ticket[1]);
        }

        List<String> path = new LinkedList<>();

        dfs(flights, path, "JFK");

        return path;
    }

    void dfs(Map<String, PriorityQueue<String>> flights, List<String> path, String stop) {
        PriorityQueue<String> dests = flights.get(stop);
        while (dests != null && !dests.isEmpty()) {
            dfs(flights, path, dests.poll());
        }
        path.add(0, stop);
    }
}
