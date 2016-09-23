'use strict';

const list = [
    [1,2,3,4],
    [2,5,6,7,8],
    [6,7,8],
    [7,8],
    [8]
];

function getFriends(id) {
    return list[id];
}

function mutualFriends(userId) {
    const friends = new Set(getFriends(userId));
    const map = new Map();
    for (const friend of friends) {
        const friendsFriends = new Set(getFriends(friend));
        for (const person of friendsFriends) {
            if (friends.has(person)) {
                continue;
            }
            if (!map.has(person)) {
                map.set(person, 1);
            } else {
                map.set(person, map.get(person) + 1);
            }
        }
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).map(e => e[0]);
}

console.log(mutualFriends(0));
