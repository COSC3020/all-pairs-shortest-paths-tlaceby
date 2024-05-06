import { allPairsShortestPaths } from "./code.js";
import { deepStrictEqual } from "assert";

// Test complex graph
console.log("Testing Complex Graph:");
const graph = [
  [0, Infinity, -2, Infinity],
  [4, 0, 3, Infinity],
  [Infinity, Infinity, 0, 2],
  [Infinity, -1, Infinity, 0],
];

const result = allPairsShortestPaths(graph);
const expected = [
  [0, -1, -2, 0],
  [4, 0, 2, 4],
  [5, 1, 0, 2],
  [3, -1, 1, 0],
];
deepStrictEqual(result, expected);
console.log("Passed!");

// Test Somple graph
const simpleGraph = [
  [0, 3, Infinity],
  [Infinity, 0, Infinity],
  [Infinity, 1, 0],
];

console.log("\nTesting Simple Graph:");
const simpleResult = allPairsShortestPaths(simpleGraph);
const simpleExpected = [
  [0, 3, Infinity],
  [Infinity, 0, Infinity],
  [Infinity, 1, 0],
];

deepStrictEqual(simpleResult, simpleExpected);
console.log("Passed!");
