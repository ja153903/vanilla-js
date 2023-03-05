/**
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
const addBinary = function (a, b) {
  let result = ''
  let carry = 0
  let current = 0

  let left = a.length - 1,
    right = b.length - 1

  while (left >= 0 || right >= 0) {
    current = carry

    if (left >= 0) {
      current += parseInt(a[left])
      left--
    }

    if (right >= 0) {
      current += parseInt(b[right])
      right--
    }

    result = `${current % 2}${result}`
    carry = Math.floor(current / 2)
  }

  if (carry > 0) {
    result = `1${result}`
  }

  return result
}

export { addBinary }
