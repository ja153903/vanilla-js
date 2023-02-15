/**
 * Return the number of fair pairs.
 * A fair is pair if:
 * - 0 <= i < j < n
 * - lower <= nums[i] + nums[j] <= upper
 *
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @returns {number}
 */
const countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b)

  // the number of fair pairs is equivalent to the number of
  // of items less than or equal to upper subtracted from
  // the number of items less than lower - 1
  // this is basically reduced a range query type of problem
  return countLess(nums, upper) - countLess(nums, lower - 1)
}

/**
 * For this function, we want to find the number of items
 * less than this number
 *
 * @param {number[]} nums
 * @param {number} value
 * @returns {number}
 */
function countLess(nums, value) {
  let result = 0

  for (let i = 0, j = nums.length - 1; i < j; i++) {
    while (i < j && nums[i] + nums[j] > value) {
      j--
    }

    result += j - i
  }

  return result
}

/**
 * Return the number of fair pairs.
 * A fair is pair if:
 * - 0 <= i < j < n
 * - lower <= nums[i] + nums[j] <= upper
 *
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @returns {number}
 */
function countFairPairsTLE(nums, lower, upper) {
  // Brute Force Solution is O(n^2)
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]
      if (lower <= sum && sum <= upper) {
        result++
      }
    }
  }

  return result
}

export { countFairPairs, countFairPairsTLE }
