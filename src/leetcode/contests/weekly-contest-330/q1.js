/**
 * @param {number} n
 * @returns {number}
 */
const distinctIntegers = function (n) {
  return n > 1 ? n - 1 : 1
}

module.exports = { distinctIntegers }
