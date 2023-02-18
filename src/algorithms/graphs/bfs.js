import { buildUndirectedGraph } from './build-graph.js'

/**
 * Note that the assumption here is that we have nodes
 * labelled from 0 to n - 1
 *
 * @param {number[][]} edges
 */
export function bfs(edges) {
  const graph = buildUndirectedGraph(edges)

  /** @type {number[]} */
  const queue = []

  /** @type {Set<number>} */
  const visited = new Set()

  queue.push(0)
  visited.add(0)

  while (queue.length > 0) {
    const front = queue.shift()

    console.log(front)

    for (const child of graph.get(front) ?? []) {
      if (!visited.has(child)) {
        queue.push(child)
        visited.add(child)
      }
    }
  }
}
