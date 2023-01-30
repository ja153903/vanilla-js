/**
 *
 * @param {number[]} weights
 * @param {number[]} values
 * @param {number} capacity
 * @returns {number}
 */
function zeroOneKnapsack(weights, values, capacity) {
  const n = weights.length
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0))

  // iterate over the possible weights
  for (let i = 0; i < n; i++) {
    // iterate over the possible capacities
    for (let j = 0; j <= capacity; j++) {
      if (weights[i] <= j) {
        // If the above condition is true, this means that
        // we can choose to both include or exclude the value
        dp[i + 1][j] = Math.max(dp[i][j], dp[i][j - weights[i]] + values[i])
      } else {
        dp[i + 1][j] = dp[i][j]
      }
    }
  }

  return dp[n][capacity]
}

module.exports = { zeroOneKnapsack }
