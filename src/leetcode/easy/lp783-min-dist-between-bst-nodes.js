/**
 * @typedef TreeNode
 * @type {object}
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */
const minDiffInBST = function (root) {
  /**
   * @param {TreeNode} node
   */
  function inorder(node) {
    if (!node) {
      return
    }

    inorder(node.left)
    nodes.push(node.val)
    inorder(node.right)
  }

  const nodes = []

  inorder(root)

  let minDiff = Number.POSITIVE_INFINITY

  for (let i = 1; i < nodes.length; i++) {
    minDiff = Math.min(minDiff, nodes[i] - nodes[i - 1])
  }

  return minDiff
}

export { minDiffInBST }
