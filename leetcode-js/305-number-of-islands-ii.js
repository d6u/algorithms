const DIRS = [[0, 1], [0, -1], [-1, 0], [1, 0]];

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
    const islands = new UnionFind2D(m, n);
    const result = [];

    for (const position of positions) {
        const x = position[0];
        const y = position[1];

        const p = islands.add(x, y);
        for (const d of DIRS) {
            const q = islands.getID(x + d[0], y + d[1]);
            if (q > 0 && !islands.find(p, q)) {
                islands.unite(p, q);
            }
        }

        result.push(islands.size());
    }

    return result;
};

class UnionFind2D {
    constructor(m, n) {
        this.count = 0;
        this.n = n;
        this.m = m;
        this.id = Array(m * n + 1).fill(0);
        this.sz = Array(m * n + 1).fill(0);
    }

    index(x, y) {
        return x * this.n + y + 1;
    }

    size() {
        return this.count;
    }

    getID(x, y) {
        if (0 <= x && x < this.m && 0 <= y && y < this.n) {
            return this.id[this.index(x, y)];
        } else {
            return 0;
        }
    }

    add(x, y) {
        const i = this.index(x, y);
        this.id[i] = i;
        this.sz[i] = 1;
        this.count += 1;
        return i;
    }

    find(p, q) {
        return this.root(p) === this.root(q);
    }

    unite(p, q) {
        const i = this.root(p);
        const j = this.root(q);
        if (this.sz[i] < this.sz[j]) { // weighted quick union
            this.id[i] = j;
            this.sz[j] += this.sz[i];
        } else {
            this.id[j] = i;
            this.sz[i] += this.sz[j];
        }
        this.count -= 1;
    }

    root(i) {
        while (i !== this.id[i]) {
            this.id[i] = this.id[this.id[i]]; // path compression
            i = this.id[i];
        }
        return i;
    }
}
