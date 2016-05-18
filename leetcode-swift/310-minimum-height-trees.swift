class Solution {
    func findMinHeightTrees(n: Int, _ edges: [[Int]]) -> [Int] {
        if n == 1 {
            return [0]
        }

        var nodes = [Set<Int>](count: n, repeatedValue: Set<Int>())

        for edge in edges {
            let a = edge[0]
            let b = edge[1]
            nodes[a].insert(b)
            nodes[b].insert(a)
        }

        var leaves = [Int]()

        for (i, node) in nodes.enumerate() {
            if node.count == 1 {
                leaves.append(i)
            }
        }

        var count = n

        while count > 2 {
            count -= leaves.count
            var newLeaves = [Int]()
            for leaf in leaves {
                var node = nodes[leaf]
                let b = node[node.startIndex]
                node.remove(b)
                nodes[b].remove(leaf)
                if nodes[b].count == 1 {
                    newLeaves.append(b)
                }
            }
            leaves = newLeaves
        }

        return leaves
    }
}
