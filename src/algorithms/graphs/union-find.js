/**
 * @fileoverview Union-Find data structure
 */
class UnionFind {
  /**
   * @param {number} nodes
   */
  constructor(nodes) {
    /** @type {number} */
    this.nodes = nodes
    /** @type {number[]} */
    this.ranks = new Array(nodes).fill(0)
    /** @type {number[]} */
    this.parents = new Array(nodes).fill(0).map((_value, index) => index)
  }

  /**
   * This function searches for the node's parent
   * with path compression.
   *
   * @param {number} node
   * @returns {number}
   */
  find(node) {
    if (this.parents[node] !== node) {
      this.parents[node] = this.find(this.parents[node])
    }

    return this.parents[node]
  }

  /**
   * This function connects two nodes into the same
   * connected component
   *
   * @param {number} u
   * @param {number} v
   */
  union(u, v) {
    const uParent = this.find(u)
    const vParent = this.find(v)

    if (uParent === vParent) {
      return
    }

    if (this.ranks[uParent] < this.ranks[vParent]) {
      this.parents[uParent] = vParent
      this.ranks[vParent]++
    } else {
      this.parents[vParent] = uParent
      this.ranks[uParent]++
    }
  }

  /**
   * This static methods gets the number of connected components
   * in a Union-Find data structure
   *
   * @returns {number}
   */
  get numberOfConnectedComponents() {
    const set = new Set()

    for (let i = 0; i < this.nodes; i++) {
      set.add(this.find(i))
    }

    return set.size
  }
}

export { UnionFind }