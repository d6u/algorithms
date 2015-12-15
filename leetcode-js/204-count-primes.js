/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;

    var arr = [];
    var i;
    var j;

    for (i = 2; i < n; i++) {
        arr[i] = true;
    }

    for (i = 2; i < Math.sqrt(n); i++) {
        if (arr[i]) {
            for (j = i * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }

    var c = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i]) {
            c += 1;
        }
    }

    return c;
};
