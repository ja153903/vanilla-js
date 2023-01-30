const { findInsertionPoint } = require('@/algorithms/binary-search')

/**
 * Given a list of numbers, find the length of the longest increasing
 * subsequence.
 *
 * @param {number[]} nums
 * @returns {number}
 */
const lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1)

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}

/**
 * This is the alternative Greedy solution for LIS
 *
 * @param {number[]} nums
 * @returns {number}
 */
const lisWithBinarySearch = function (nums) {
  const sub = []

  for (const num of nums) {
    if (sub.length === 0 || sub[sub.length - 1] < num) {
      sub.push(num)
    } else {
      const index = findInsertionPoint(sub, num)
      sub[index] = num
    }
  }

  return sub.length
}

module.exports = { lengthOfLIS, lisWithBinarySearch }
