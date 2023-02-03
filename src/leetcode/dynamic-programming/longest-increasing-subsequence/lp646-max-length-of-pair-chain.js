/**
 * You are given an array of n pairs pairs where pairs[i] = [left_i, right_i] and left_i < right_i.
 * A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.
 * Return the length longest chain which can be formed.
 * You do not need to use up all the given intervals. You can select pairs in any order.
 *
 * This is a typical LIS type of problem.
 * We just need to sort the items in the list based on the first value
 *
 * @param {number[][]} pairs
 * @returns {number}
 */
export const findLongestChain = function (pairs) {
  pairs.sort((a, b) => {
    return a[0] - b[0]
  })

  const dp = new Array(pairs.length).fill(1)

  for (let i = 1; i < pairs.length; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}
