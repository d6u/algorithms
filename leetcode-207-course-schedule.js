/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  'use strict';

  if (!prerequisites.length) return true;

  let degrees = [];
  let courses = new Set();
  let map = new Map();

  for (let i = 0; i < numCourses; i += 1) {
    degrees[i] = 0;
    courses.add(i);
    map.set(i, []);
  }

  for (let pair of prerequisites) {
    degrees[pair[0]] += 1;
    map.get(pair[1]).push(pair[0]);
  }

  let course;

  while ((course = getHead(degrees, courses)) !== null) {
    topologicalSort(course, courses, map, degrees);
  }

  return courses.size === 0;
};

function getHead(degrees, courses) {
  'use strict';

  for (let course of courses) {
    if (degrees[course] === 0) {
      return course;
    }
  }
  return null;
}

/**
 * [topologicalSort description]
 * @param  {number}               course
 * @param  {Set<number>}          courses
 * @param  {Map<number,number[]>} map
 * @param  {number[]}             degrees
 * @return {void}
 */
function topologicalSort(course, courses, map, degrees) {
  'use strict';

  for (let child of map.get(course)) {
    degrees[child] -= 1;
    if (degrees[child] === 0) {
      topologicalSort(child, courses, map, degrees);
    }
  }
  courses.delete(course);
}

console.log(canFinish(8,
  [
    [1,0],
    [2,1],
    [0,3],
    [3,1]
  ]));
