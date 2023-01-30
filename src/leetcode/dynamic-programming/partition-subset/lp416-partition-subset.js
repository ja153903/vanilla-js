const { sum } = require('@/algorithms/arrays')

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
 * @param {number[]} nums
 * @returns {boolean}
 */
const canPartition = function (nums) {
  let total = sum(nums)

  // This is another way of seeing if it's odd
  if ((total & 1) === 1) {
    return false
  }

  total /= 2

  const dp = new Array(total + 1).fill(false)
  dp[0] = true

  for (const num of nums) {
    for (let i = total; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num]
    }
  }

  return dp[total]
}

module.exports = { canPartitionTLE, canPartition }
