import { sum } from '@/algorithms/arrays'

/**
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * We are playing a game with the stones. On each turn, we choose any two stones and
 * smash them together. Suppose the stones have weights x and y with x <= y.
 * The result of this smash is:
 *    - If x == y, both stones are destroyed, and
 *    - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 *
 * At the end of the game, there is at most one stone left.
 *
 * Return the smallest possible weight of the left stone. If there are no stones left, return 0.
 *
 * How do we apply 0/1 knapsack to this problem?
 *
 * The solution requires us to find the minimum difference between the sum of two subsets.
 *
 * @param {number[]} stones
 * @return {number}
 */
export const lastStoneWeightII = function (stones) {
  let s2 = 0

  const n = stones.length
  const total = sum(stones)
  const dp = new Array(total + 1)
    .fill(null)
    .map(() => new Array(n + 1).fill(false))

  for (let i = 0; i <= n; i++) {
    dp[0][i] = true
  }

  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= total / 2; s++) {
      if (
        dp[s][i - 1] ||
        (s >= stones[i - 1] && dp[s - stones[i - 1]][i - 1])
      ) {
        dp[s][i] = true
        s2 = Math.max(s2, s)
      }
    }
  }

  // if we maximize s2, then we can find the minimum difference
  // by subtracting twice s2 from the total
  return total - 2 * s2
}
