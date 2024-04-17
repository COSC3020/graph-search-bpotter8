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

assert(JSON.stringify(depthFirstSearch(testGraph, 'A', 'F')) == JSON.stringify(['A', 'C', 'D', 'F']))
