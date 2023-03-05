/**
 * Simple application of sliding window
 *
 * @param {number} target
 * @param {number[]} nums
 * @returns {number}
 */
export const minSubArrayLen = function (target, nums) {
  let result = Number.POSITIVE_INFINITY
  let start = 0

  for (let end = 0; end < nums.length; end++) {
    target -= nums[end]

    while (target <= 0) {
      result = Math.min(result, end - start + 1)
      target += nums[start]
      start++
    }
  }

  return result === Number.POSITIVE_INFINITY ? 0 : result
}
