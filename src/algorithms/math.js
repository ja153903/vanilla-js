/**
 * Greatest common divisor
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
  if (b === 0) {
    return a
  }

  return gcd(b, a % b)
}

module.exports = { gcd }
