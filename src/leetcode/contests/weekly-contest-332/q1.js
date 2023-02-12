/**
 * @param {number[]} nums
 * @return {number}
 */
const findTheArrayConcVal = function (nums) {
  let result = 0

  while (nums.length >= 2) {
    const first = nums.shift()
    const second = nums.pop()

    result += parseInt(`${first}${second}`)
  }

  if (nums.length === 1) {
    result += nums.pop()
  }

  return result
}

export { findTheArrayConcVal }
