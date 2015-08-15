/**
 * @param  {string}     s
 * @return {string[][]}
 */
var partition = function(s) {
  if (s.length === 0) {
    return [];
  }

  var isPal = buildMatrix(s);
  var result = [];

  findPartition(s, 0, isPal, [], result);

  return result;
};

function findPartition(s, start, isPal, sol, result) {
  if (start === s.length) {
    result.push(sol);
  }

  var i;

  for (i = start; i < s.length; i++) {
    if (isPal[start][i]) {
      findPartition(s, i + 1, isPal, sol.concat([s.substr(start, i - start + 1)]), result);
    }
  }
}

function buildMatrix(s) {
  var l = s.length;
  var i;
  var j;

  var isPal = Array(l);

  for (i = 0; i < l; i++) {
    isPal[i] = Array(l);
    for (j = 0; j < l; j++) {
      isPal[i][j] = false;
    }
  }

  for (i = l - 1; i >= 0; i--) {
    for (j = i; j < l; j++) {
      if ((j - i < 2 || isPal[i + 1][j - 1]) && s[i] === s[j]) {
        isPal[i][j] = true;
      }
    }
  }

  return isPal;
}
