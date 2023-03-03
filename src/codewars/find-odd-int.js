/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function findOdd(nums) {
  const count = new Map()
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1)
  }

  for (const [num, c] of count.entries()) {
    if (c % 2 === 1) {
      return num
    }
  }

  return -1
}

export { findOdd }
