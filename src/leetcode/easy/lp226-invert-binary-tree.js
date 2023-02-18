/**
 * @typedef TreeNode
 * @type {object}
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) {
    return null
  }

  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right
  root.right = left

  return root
}

export { invertTree }
