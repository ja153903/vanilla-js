/**
 * Given a set of distinct positive integers nums,
 * return the largest subset answer such that every pair
 * (answer[i], answer[j]) of elements in this subset satisfies:
 *
 *    answer[i] % answer[j] == 0, or
 *    answer[j] % answer[i] == 0
 *
 * If there are multiple solutions, return any of them.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3]
 * Output: [1, 2] or [1, 3]
 *
 * Explanation:
 *
 * Given our array, we can see here that we can take values from 2 ends, the left and right
 * This takes advantage of the fact that that they are sorted (this might be something we
 * want to consider when solving this problem)
 *
 * [1, 3] can be taken as a solution here. As we create pairs, we can probably mark the used
 * items in a set of visited values
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const largestDivisibleSubset = function (nums) {
  const n = nums.length

  if (n <= 1) {
    return nums
  }

  nums.sort((a, b) => a - b)
  // Keeps track of the count of the previous subset
  const count = new Array(n).fill(0)
  const prev = new Array(n).fill(0)

  let max = 0
  let index = -1

  // This is the LIS setup
  for (let i = 0; i < n; i++) {
    count[i] = 1
    prev[i] = -1

    // We iterate backwards
    // if nums[i] % nums[j] === 0
    // then we'll update count[i] if count[j] + 1 is greater
    // than count[i] because we're trying to construct
    // the largest divisible subset
    // then we also update prev[i] to be j because this means
    // that the index we're considering before nums[i] is going to be
    // located at index j
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        if (count[j] + 1 > count[i]) {
          count[i] = count[j] + 1
          prev[i] = j
        }
      }
    }

    if (max < count[i]) {
      max = count[i]
      index = i
    }
  }

  const result = []

  // from the last index
  // we keep going backwards
  while (index !== -1) {
    result.push(nums[index])
    index = prev[index]
  }

  return result
}

module.exports = { largestDivisibleSubset }
