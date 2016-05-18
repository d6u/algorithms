class Solution {
    func validTree(n: Int, _ edges: [[Int]]) -> Bool {
        if n != edges.count + 1 {
            return false
        }

        var graph = [Int](count: n, repeatedValue: -1)

        for edge in edges {
            let a = self.find(graph, edge[0])
            let b = self.find(graph, edge[1])
            if a == b {
                return false
            }
            graph[a] = b
        }

        return true
    }

    func find(graph: [Int], _ node: Int) -> Int {
        if graph[node] == -1 {
            return node
        }
        return self.find(graph, graph[node])
    }
}
