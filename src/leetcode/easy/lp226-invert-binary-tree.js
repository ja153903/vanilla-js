/**
 * @typedef TreeNode
 * @type {object}
 * @property {number} val
 * @property {TreeNode | null} left
 * @property {TreeNode | null} right
 */

/**
 * @param {TreeNode} root
 * @returns {TreeNode | null}
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
