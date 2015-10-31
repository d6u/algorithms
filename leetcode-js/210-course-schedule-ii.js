/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var graph = {};
    var degree = [];
    var isolated = [];
    var i;
    var edge;
    var course;
    var results = [];
    var count = 0;

    for (i = 0; i < numCourses; i++) {
        degree[i] = 0;
        graph[i] = [];
    }

    for (i = 0; i < prerequisites.length; i++) {
        edge = prerequisites[i];
        graph[edge[1]].push(edge[0]);
        degree[edge[0]] += 1;
    }

    for (i = 0; i < degree.length; i++) {
        if (!degree[i]) {
            isolated.push(i);
        }
    }

    while (isolated.length) {
        course = isolated.pop();
        results.push(course);
        count += 1;
        for (i = 0; i < graph[course].length; i++) {
            degree[graph[course][i]] -= 1;
            if (!degree[graph[course][i]]) {
                isolated.push(graph[course][i]);
            }
        }
    }

    return count === numCourses ? results : [];
};


console.log(findOrder(3, [[2,0],[2,1]]));
