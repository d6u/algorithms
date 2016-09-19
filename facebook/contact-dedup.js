'use strict';

/**
 * @param  {string[][]} contacts
 * @return {number[][]}
 */
function contactDedup(contacts) {
    const uf = new UnionFind(contacts.length);

    for (let i = 0; i < contacts.length; i++) {
        const id = i + 1;
        uf.add(id);
        for (const email of contacts[i]) {
            if (uf.get(email) == null) {
                uf.set(email, id);
            } else {
                uf.unite(id, uf.get(email));
            }
        }
    }

    const res = {};

    for (let i = 1; i < uf.ids.length; i++) {
        const id = uf.root(i);
        if (res[id] == null) {
            res[id] = [i];
        } else {
            res[id].push(i);
        }
    }

    return Object.keys(res).map(k => res[k]);
}

class UnionFind {
    constructor(count) {
        this.ids = Array(count + 1).fill(0);
        this.map = {};
    }

    set(email, id) {
        this.map[email] = id;
    }

    get(email) {
        return this.map[email];
    }

    add(i) {
        this.ids[i] = i;
    }

    find(a, b) {
        return this.root(a) === this.root(b);
    }

    unite(a, b) {
        const i = this.root(a);
        const j = this.root(b);
        this.ids[i] = j;
    }

    // private

    root(i) {
        while (i !== this.ids[i]) {
            i = this.ids[i];
        }
        return i;
    }
}

console.log(contactDedup([
    ['x', 'y', 'z'],
    ['x'],
    ['a', 'b'],
    ['y', 'z'],
    ['b'],
    ['m'],
    ['t', 'b']
]));

console.log(contactDedup([
    ['a'],
    ['a', 'b'],
    ['b', 'c'],
    ['c', 'd'],
]));
