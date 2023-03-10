import { buildUndirectedGraph } from './build-graph.js'

/**
 *
 * @param {number[][]} edges
 */
export function dfs(edges) {
  const graph = buildUndirectedGraph(edges)

  /** @type {Set<number>} */
  const visited = new Set()

  function dfsHelper(node) {
    if (visited.has(node)) {
      return
    }

    visited.add(node)
    console.log(node)

    for (const child of graph.get(node) ?? []) {
      dfsHelper(child)
    }
  }

  dfsHelper(0)
}
