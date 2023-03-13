/**
 * @param {string} s
 * @returns {number}
 */
const lengthOfLongestSubstring = function (s) {
  const found = new Map()
  let maxLength = 0
  let start = 0

  for (let i = 0; i < s.length; i++) {
    const current = s[i]

    if (found.has(current)) {
      // we never want to go back all the way
      // we want to make sure that we only go back
      // until the current start (which could be further ahead)
      start = Math.max(start, found.get(current) + 1)
    }

    maxLength = Math.max(maxLength, i - start + 1)
    found.set(current, i)
  }

  return maxLength
}

export { lengthOfLongestSubstring }
