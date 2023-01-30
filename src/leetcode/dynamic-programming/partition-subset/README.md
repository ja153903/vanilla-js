# 0/1 Knapsack Problem

## References

[LeetCode Article about 0/1 Knapsack Problem](https://leetcode.com/discuss/study-guide/1152328/01-Knapsack-Problem-and-Dynamic-Programming)

## Problem Description

Given weights and values of `N` items, put these items in a knapsack of capacity `W` to get the maximum total value in the knapsack.
In other words, given two integer arrays `val[0..N-1]` and `wt[0..N-1]` which represent values and weights associated with N items respectively.
Also given an integer `W` which represents knapsack capacity, find out the maximum value subset of `val[]` such that the sum of the weights
of this subset is smaller than or equal to `W`. You cannot break an item, either pick the complete item or don’t pick it (0-1 property)

## Solution

```javascript
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

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (weights[i] <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j] + values[i])
      } else {
        dp[i][j] = dp[i - 1][j - 1]
      }
    }
  }

  return dp[n][capacity]
}
```
