/**
 *
 * @param {number[]} edges
 * @returns {Map<number, Set<number>>}
 */
export function buildUndirectedGraph(edges) {
  const graph = new Map()

  for (const [u, v] of edges) {
    if (!graph.has(u)) {
      graph.set(u, new Set())
    }

    if (!graph.has(v)) {
      graph.set(v, new Set())
    }

    graph.get(u).add(v)
    graph.get(v).add(u)
  }

  return graph
}

/**
 *
 * @param {number[]} edges
 * @returns {Map<number, Set<number>>}
 */
export function buildDirectedGraph(edges) {
  const graph = new Map()

  for (const [u, v] of edges) {
    if (!graph.has(u)) {
      graph.set(u, new Set())
    }

    graph.get(u).add(v)
  }

  return graph
}
