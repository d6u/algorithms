/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const map = new Map();

    for (const ticket of tickets) {
        if (map.has(ticket[0])) {
            map.get(ticket[0]).push(ticket[1]);
        } else {
            map.set(ticket[0], [ticket[1]]);
        }
    }

    for (const queue of map.values()) {
        queue.sort();
    }

    const route = [];
    const stack = [];

    stack.push('JFK');

    while (stack.length) {
        while (map.has(peek(stack)) && map.get(peek(stack)).length) {
            stack.push(map.get(peek(stack)).shift());
        }
        route.unshift(stack.pop());
    }

    return route;
};

function peek(stack) {
    return stack[stack.length - 1];
}

console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]));
// console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
