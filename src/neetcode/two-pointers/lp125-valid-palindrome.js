/**
 * @param {string} s
 * @returns {boolean}
 */
const isPalindrome = function (s) {
  const lower = s.toLowerCase()
  const stripNonAlphabetic = lower.split('').filter((ch) => /[a-z0-9]/.test(ch))
  const cleaned = stripNonAlphabetic.join('')

  let left = 0,
    right = cleaned.length - 1

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false
    }

    left++
    right--
  }

  return true
}

export { isPalindrome }
