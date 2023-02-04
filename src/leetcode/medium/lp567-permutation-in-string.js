/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false
  }

  const chars = new Array(26).fill(0)
  let start = 0

  for (const char of s1) {
    chars[char.charCodeAt(0) - 97]++
  }

  for (let end = 0; end < s2.length; end++) {
    const curr = s2[end].charCodeAt(0) - 97
    // decrement the current character
    chars[curr]--

    // if all characters are 0, then return
    if (isAllZero(chars)) {
      return true
    }

    // if the current window has length equal to s1,
    // then we should increment the start pointer
    if (end - start + 1 === s1.length) {
      const prev = s2[start].charCodeAt(0) - 97
      chars[prev]++
      start++
    }
  }

  return false
}

/**
 * @param {number[]} chars
 * @returns {boolean}
 */
function isAllZero(chars) {
  for (const count of chars) {
    if (count !== 0) {
      return false
    }
  }

  return true
}

export { checkInclusion }
