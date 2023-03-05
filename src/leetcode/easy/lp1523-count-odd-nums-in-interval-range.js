/**
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
const countOdds = function (low, high) {
  let result = 0

  for (let i = low; i <= high; i++) {
    if (i % 2 === 1) {
      result++
    }
  }

  return result
}

export { countOdds }
