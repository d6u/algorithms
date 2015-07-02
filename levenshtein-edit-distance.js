'use strict';

function levenshteinEditDistance(a, b) {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  var v0 = [];
  var v1 = [];

  for (var i = 0; i <= b.length; i++) {
    v0[i] = i;
  }

  for (var i = 0; i < a.length; i++) {
    v1[0] = i + 1;
    for (var j = 0; j < b.length; j++) {
      var cost = a[i] === b[j] ? 0 : 1;
      v1[j + 1] = Math.min(v1[j] + 1,     // delete char from b
                           v0[j + 1] + 1, // insert char to b
                           v0[j] + cost); // substitute
    }

    console.log(v1);

    for (var j = 0; j <= b.length; j++) {
      v0[j] = v1[j];
    }
  }

  return v1[b.length];
}

console.log(levenshtein('horse', 'ros'));
