/**
 * This solution works but times out
 * Since this solution runs in O(n^2) and times out,
 * this means that O(n lg n) is the ideal time complexity
 *
 * @param {number[][]} envelopes
 * @returns {number}
 */
const maxEnvelopesTLE = function (envelopes) {
  const n = envelopes.length
  envelopes.sort((a, b) => {
    return a[0] - b[0]
  })

  const dp = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    const [wi, hi] = envelopes[i]
    for (let j = 0; j <= i; j++) {
      const [wj, hj] = envelopes[j]

      if (wj < wi && hj < hi) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}

/**
 *
 * @param {number[][]} envelopes
 * @returns {number}
 */
const maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }

    return a[0] - b[0]
  })

  const dp = []
  let len = 0

  for (const envelope of envelopes) {
    const [_width, height] = envelope

    if (dp.length === 0 || dp[dp.length - 1] < height) {
      dp.push(height)
      len++
    } else {
      // Given the current height, we want to find the
      // appropriate height to insert this new height
      // in our DP array
      let left = 0
      let right = len

      while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (dp[mid] < height) {
          left = mid + 1
        } else {
          right = mid
        }
      }

      dp[left] = height
    }
  }

  return len
}

module.exports = { maxEnvelopesTLE, maxEnvelopes }
