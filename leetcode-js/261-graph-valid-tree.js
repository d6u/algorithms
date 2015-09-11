/**
 * @param  {number}     n
 * @param  {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (edges.length !== n - 1) {
    return false;
  }

  var neighbors = new Map();
  var i;

  for (i = 0; i < n; i++) {
    neighbors.set(i, []);
  }

  var edge;

  for (edge of edges) {
    neighbors.get(edge[0]).push(edge[1]);
    neighbors.get(edge[1]).push(edge[0]);
  }

  visit(0, neighbors);

  console.log(neighbors);

  return neighbors.size === 0;
};

function visit(key, neighbors) {
  var val = neighbors.get(key);
  var v;
  if (val != null) {
    neighbors.delete(key);
    for (v of val) {
      visit(v, neighbors);
    }
  }
}

console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3]]))
