/**
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1

  while (left < right) {
    const current = numbers[left] + numbers[right]

    if (current === target) {
      return [left + 1, right + 1]
    } else if (current < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

export { twoSum }
