import { sum } from '@/algorithms/arrays.js'
import { isOdd } from '@/algorithms/bit-manipulation.js'

/**
 * Given an integer array nums, return true if you can partition
 * the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
 *
 * This backtracking solution does not pass the time limit.
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
const canPartitionTLE = function (nums) {
  const total = sum(nums)
  return backtracking(nums, total, 0, 0)
}

function backtracking(nums, total, start, sum) {
  if (total - sum === sum) {
    return true
  }

  for (let i = start; i < nums.length; i++) {
    if (backtracking(nums, total, i + 1, sum + nums[i])) {
      return true
    }
  }

  return false
}

/**
 * Given an integer array nums, return true if you can partition
 * the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
 *
 * This problem relies on 0/1 knapsack.
 *
 * Explanation:
 *
 * How does this question fit the 0/1 knapsack problem?
 *
 * The 0/1 knapsack problem aims to find the maximum value of the items that can be
 * put into a knapsack of a certain capacity.
 *
 * In our case, we aim to see if there exists a subset of values that can be put
 * into the knapsack with a capacity of half the total sum.
 *
 * So our case is a variant of the 0/1 knapsack problem.
 *
 * In our dp array, we would say that dp[i] represents whether
 * the sum i can be formed by some elements in the array.
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
const canPartition = function (nums) {
  let total = sum(nums)

  if (isOdd(total)) {
    return false
  }

  total /= 2

  // dp[i] represents whether the sum i can be formed by some elements in the array
  const dp = new Array(total + 1).fill(false)
  dp[0] = true

  // Iterate over the possible weights
  for (const num of nums) {
    // Iterate over the capacities as long
    // as the capacity is greater than or equal to the weight
    for (let i = total; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num]
    }
  }

  return dp[total]
}

export { canPartitionTLE, canPartition }
