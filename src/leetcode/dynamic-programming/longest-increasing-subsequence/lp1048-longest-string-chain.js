/**
 * We can apply LIS techniques to solve this problem
 *
 * @param {string[]} words
 * @returns {number}
 */
const longestStrChain = function (words) {
  words.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b)
    }

    return a.length - b.length
  })

  const dp = new Array(words.length).fill(1)

  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      // only need to check if dp[i] is less than a potential increase with dp[j]
      // and also when we can actually transform from one word to another
      if (dp[i] < dp[j] + 1 && canTransform(words, i, j)) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}

/**
 *
 * @param {string[]} words
 * @param {number} current
 * @param {number} previous
 * @returns {boolean}
 */
function canTransform(words, current, previous) {
  const currentWord = words[current]
  const previousWord = words[previous]

  if (currentWord.length !== previousWord.length + 1) {
    return false
  }

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(i + 97)

    for (let j = 0; j <= previousWord.length; j++) {
      const prevSubstr = previousWord.substring(0, j)
      const restSubstr = previousWord.substring(j)

      const formatted = `${prevSubstr}${char}${restSubstr}`

      if (formatted === currentWord) {
        return true
      }
    }
  }

  return false
}

module.exports = { longestStrChain }
