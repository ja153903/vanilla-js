/**
 * Return the number of longest increasing subsequences
 *
 * @param {number[]} nums
 * @returns {number}
 */
const findNumberOfLIS = function (nums) {
  const n = nums.length
  // lengths of the subsequences up to index i
  const lengths = new Array(n).fill(0)
  // number of subsequences up to index i with given lengths[i]
  const count = new Array(n).fill(0)

  let maxLen = 0
  let result = 0

  for (let i = 0; i < n; i++) {
    count[i] = 1
    lengths[i] = 1

    // at every point, figure out the longest increasing subsequence
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (lengths[i] === lengths[j] + 1) {
          count[i] += count[j]
        }

        if (lengths[i] < lengths[j] + 1) {
          lengths[i] = lengths[j] + 1
          count[i] = count[j]
        }
      }
    }

    // make updates to the result by either increasing the count
    // or if we need to update the result because we've found a longer
    // increasing subsequence
    if (maxLen === lengths[i]) {
      result += count[i]
    }
    if (maxLen < lengths[i]) {
      maxLen = lengths[i]
      result = count[i]
    }
  }

  return result
}

module.exports = { findNumberOfLIS }
