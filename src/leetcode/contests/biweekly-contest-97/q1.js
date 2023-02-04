/**
 * @param {number[]} nums
 * @return {number[]}
 */
const separateDigits = function (nums) {
  let result = []

  for (let num of nums) {
    const subresult = []

    while (num > 0) {
      subresult.unshift(num % 10)
      num = Math.floor(num / 10)
    }

    result = [...result, ...subresult]
  }

  return result
}

export { separateDigits }
