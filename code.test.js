const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testGraph = {
  A: ['B', 'C'],
  B: ['C', 'E'],
  C: ['D'],
  D: ['F'],
  E: [],
  F: []
}

jsc.assert(jsc.utils.isEqual(depthFirstSearch(testGraph, 'A', 'F')), (['A', 'C', 'D', 'F']));