/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const seen = new Map()

  for (let i = 0; i < nums.length; i++) {
    const desired = target - nums[i]

    if (seen.has(desired)) {
      return [seen.get(desired), i]
    }

    seen.set(nums[i], i)
  }

  return []
}

module.exports = { twoSum }
