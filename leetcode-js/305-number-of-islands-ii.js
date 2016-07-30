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

        // Form an island
        const p = islands.add(x, y);

        // Unit islands that are connected
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

        // Leave index 0 for "nothing"
        this.id = Array(m * n + 1).fill(0);

        // sz to save size (count of all nodes) of the tree
        this.sz = Array(m * n + 1).fill(0);
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

        // weighted quick union
        if (this.sz[i] < this.sz[j]) {
            // Attach smaller tree onto bigger one
            this.id[i] = j;
            this.sz[j] += this.sz[i];
        } else {
            this.id[j] = i;
            this.sz[i] += this.sz[j];
        }

        this.count -= 1;
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

    // private
    index(x, y) {
        return x * this.n + y + 1;
    }

    // private
    // This method is used in both `find` and `unite`
    root(i) {
        while (i !== this.id[i]) {
            this.id[i] = this.id[this.id[i]]; // path compression
            i = this.id[i];
        }
        return i;
    }
}

console.log(numIslands2(3, 3, [[0,0], [0,1], [1,2], [2,1]]))
