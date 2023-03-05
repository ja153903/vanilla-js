/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @returns {number}
 */
const maxCount = function (banned, n, maxSum) {
  let result = 0
  const bannedSet = new Set(banned)
  for (let i = 1; i <= n; i++) {
    if (bannedSet.has(i)) {
      continue
    }

    if (maxSum - i >= 0) {
      result++
      maxSum -= i
    } else {
      break
    }
  }

  return result
}

export { maxCount }
