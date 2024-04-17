const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const testGraph = {
  A: ['B', 'C'],
  B: ['C', 'E'],
  C: ['D'],
  D: ['F'],
  E: [],
  F: []
}

//Unit testing for graph movement between two nodes
assert(JSON.stringify(depthFirstSearch(testGraph, 'A', 'F')) == JSON.stringify(['A', 'C', 'D', 'F']))
assert(JSON.stringify(depthFirstSearch(testGraph, 'A', 'E')) == JSON.stringify(['A', 'B', 'E']))
assert(JSON.stringify(depthFirstSearch(testGraph, 'C', 'F')) == JSON.stringify(['C', 'D', 'F']))
assert(JSON.stringify(depthFirstSearch(testGraph, 'B', 'F')) == JSON.stringify(['B', 'C', 'D', 'F']))
assert(JSON.stringify(depthFirstSearch(testGraph, 'A', 'C')) == JSON.stringify(['A', 'C']))

//Unit testing for the starting node and target node being the same
assert(JSON.stringify(depthFirstSearch(testGraph, 'A', 'A')) == JSON.stringify(['A']))
assert(JSON.stringify(depthFirstSearch(testGraph, 'B', 'B')) == JSON.stringify(['B']))
assert(JSON.stringify(depthFirstSearch(testGraph, 'C', 'C')) == JSON.stringify(['C']))
assert(JSON.stringify(depthFirstSearch(testGraph, 'D', 'D')) == JSON.stringify(['D']))
assert(JSON.stringify(depthFirstSearch(testGraph, 'E', 'E')) == JSON.stringify(['E']))

//Unit testing for no path available between two nodes
assert(JSON.stringify(depthFirstSearch(testGraph, 'E', 'D')) == JSON.stringify([]))
assert(JSON.stringify(depthFirstSearch(testGraph, 'F', 'A')) == JSON.stringify([]))
assert(JSON.stringify(depthFirstSearch(testGraph, 'E', 'A')) == JSON.stringify([]))
assert(JSON.stringify(depthFirstSearch(testGraph, 'D', 'B')) == JSON.stringify([]))
assert(JSON.stringify(depthFirstSearch(testGraph, 'B', 'A')) == JSON.stringify([]))
