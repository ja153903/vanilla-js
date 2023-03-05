/**
 * @param {number[]} nums
 * @returns {number}
 */
const longestConsecutive = function (nums) {
  // go through each number. If num - 1 does not exist within the set of elements
  // then we use that as a start point
  const unique = new Set(nums)
  let result = 0
  for (const num of nums) {
    if (!unique.has(num - 1)) {
      let start = num
      let len = 0

      while (unique.has(start)) {
        len++
        start++
      }

      result = Math.max(result, len)
    }
  }

  return result
}

export { longestConsecutive }
