/**
 * @param {number[][]} graph - graph[i][j] represents the weight of the edge from i to j, or inf if none
 * @param {number} numVertices
 * @returns {number[][]}
 */
export function initializeDistanceMatrix(graph, numVertices) {
  //- initialize a $|V|\times|V|$ matrix `dist` to $\infty$
  const dist = Array.from({ length: numVertices }, () =>
    Array(numVertices).fill(Infinity)
  );

  for (let i = 0; i < numVertices; i++) {
    dist[i][i] = 0;

    // graph[i][j] contains Infinity if there is no direct edge between i and j.
    for (let j = 0; j < numVertices; j++) {
      if (graph[i][j] !== Infinity) {
        dist[i][j] = graph[i][j];
      }
    }
  }

  return dist;
}

/**
 * @param {number[][]} graph - adjacency matrix representation of graph
 * @returns {number[][]} represents distance between path as adjmatrix.
 */
export function allPairsShortestPaths(graph) {
  const n = graph.length;
  let dist = initializeDistanceMatrix(graph, n);

  for (let k = 0; k < n; k++) {
    // n^1
    for (let i = 0; i < n; i++) {
      // n^2
      for (let j = 0; j < n; j++) {
        // n^3
        ///- `if dist[i][j] > dist[i][k] + dist[k][j]:`
        ///    `dist[i][j] = dist[i][k] + dist[k][j]`;
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
