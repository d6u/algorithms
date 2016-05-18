class Solution {
    func canFinish(numCourses: Int, _ prerequisites: [[Int]]) -> Bool {
        var degree = [Int](count: numCourses, repeatedValue: 0)
        var graph = [[Int]](count: numCourses, repeatedValue: [])

        for prerequisite in prerequisites {
            degree[prerequisite[0]] += 1
            graph[prerequisite[1]].append(prerequisite[0]);
        }

        var isolated = [Int]()

        for (i, count) in degree.enumerate() {
            if count == 0 {
                isolated.append(i)
            }
        }

        var count = 0;

        while isolated.count > 0 {
            count += 1
            let course = isolated.removeLast()
            for next in graph[course] {
                degree[next] -= 1
                if degree[next] == 0 {
                    isolated.append(next)
                }
            }
        }

        return count == numCourses;
    }
}
