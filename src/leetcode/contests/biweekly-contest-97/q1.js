/**
 * @param {number[]} nums
 * @return {number[]}
 */
const separateDigits = function (nums) {
  let result = []

  for (let num of nums) {
    while (num > 0) {
      result.unshift(num % 10)
      num = Math.floor(num / 10)
    }
  }

  return result
}

export { separateDigits }
