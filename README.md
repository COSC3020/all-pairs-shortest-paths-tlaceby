[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2i4vCRmk)

# All Pairs Shortest Paths

In the lectures, we've seen Dijkstra's algorithm for finding the shortest paths
from a given vertex to all other vertices in the graph. We've also covered the
Floyd-Warshall algorithm for finding the shortest path between all _pairs_ of
vertices. It works as follows:

Given a graph $G = (V, E)$ with weighted edges:

- initialize a $|V|\times|V|$ matrix `dist` to $\infty$
- for each vertex $v \in V$, `dist[v][v] = 0`
- for each edge $(u,v) = e \in E$, `dist[u][v] = weight((u,v))`
- for each vertex $k\in V$:
  - for each vertex $i\in V$:
    - for each vertex $j\in V$:
      - `if dist[i][j] > dist[i][k] + dist[k][j]:`
        `dist[i][j] = dist[i][k] + dist[k][j]`

Implement this algorithm, starting with the template I provided in `code.js`.
The function takes a weighted graph graph and returns the matrix with the
distances, as described above. You can choose any data structures you like for
the implementation.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

The worst-case of my implimentation of the **Floyd-Warshall** algorithmn is $\Theta(v^3)$ where $v$ represents the number of veriticies in the graph. The reasoning can be broken into two sections:

```js
export function initializeDistanceMatrix(graph, numVertices) {
  const dist = Array.from({ length: numVertices }, () =>
    Array(numVertices).fill(Infinity)
  );

  for (let i = 0; i < numVertices; i++) {
    dist[i][i] = 0;

    for (let j = 0; j < numVertices; j++) {
      if (graph[i][j] !== Infinity) {
        dist[i][j] = graph[i][j];
      }
    }
  }

  return dist;
}
```

1. First we generate the distanceMatrix for each point to another. This requires $\Theta(v^2)$ iterations in all cases including the worst-case.

```js
export function allPairsShortestPaths(graph) {
  const n = graph.length;
  let dist = initializeDistanceMatrix(graph, n);

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
```

2. In the main function `allPairsShortestPaths()` we iterate $i, j$ & $k$ from $0 \to n$. These loops are nested, therefore the number of iterations in the worst-case is always $\Theta(v^3)$.

In conclusion we can see that the worst-case complexity of this implimentation is $\Theta(v^2 + v^3)$ which simplifies to $\Theta(v^3)$.
