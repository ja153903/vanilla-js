/**
 *
 * @param {number[]} items
 * @returns {number}
 */
function sum(items) {
  return items.reduce((a, b) => a + b, 0)
}

module.exports = { sum }
