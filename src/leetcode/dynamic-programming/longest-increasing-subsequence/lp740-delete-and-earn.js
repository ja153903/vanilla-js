/**
 * This might be slow but it works to practice LIS problems
 * An alternative solution might be to do something like
 * House Robbers
 *
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  const n = nums.length

  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return nums[0]
  }

  nums.sort((a, b) => a - b)

  const dp = new Array(n).fill(0).map((_value, i) => nums[i])

  let result = nums[0]

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // we only consider the number if its not +/- 1 of nums[i]
      if (nums[i] === nums[j] || nums[i] > nums[j] + 1) {
        dp[i] = Math.max(dp[i], dp[j] + nums[i])
        result = Math.max(result, dp[i])
      }
    }
  }

  return result
}

module.exports = { deleteAndEarn }
