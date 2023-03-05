/**
 * To solve this problem, we should sort the words array
 * based on the new locale order.
 *
 * After sorting, if the new sorted array is equal to the
 * other array then we know we have a valid alien dictionary.
 *
 * @param {string[]} words
 * @param {string} order
 * @returns {boolean}
 */
export const isAlienSorted = function (words, order) {
  /**
   *
   * @param {string} a
   * @param {string} b
   * @returns {number}
   */
  const comparisonCallback = function (a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      const aIndex = order.indexOf(a[i])
      const bIndex = order.indexOf(b[i])

      if (aIndex === bIndex) {
        continue
      }

      return aIndex - bIndex
    }

    if (a.length === b.length) {
      return 0
    }

    return a.length - b.length
  }

  const wordsCopy = [...words].sort(comparisonCallback)

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== wordsCopy[i]) {
      return false
    }
  }

  return true
}
