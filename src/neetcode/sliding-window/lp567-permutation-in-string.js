/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false
  }

  const counter = new Map()

  for (const ch of s1) {
    counter.set(ch, (counter.get(ch) ?? 0) + 1)
  }

  // figure out if s2 contains a permutation of s1
  let start = 0

  for (let end = 0; end < s2.length; end++) {
    // decrement the character
    counter.set(s2[end], (counter.get(s2[end]) ?? 0) - 1)

    // check if the counter is all empty
    if (isAllZero(counter)) {
      return true
    }

    // if we're currently at the size of the first string
    // then we should update the left pointer
    if (end - start + 1 === s1.length) {
      counter.set(s2[start], (counter.get(s2[start]) ?? 0) + 1)
      start++
    }
  }

  return false
}

/**
 * @param {Map<number, number>} counter
 * @returns {boolean}
 */
function isAllZero(counter) {
  for (const count of counter.values()) {
    if (count !== 0) {
      return false
    }
  }

  return true
}

export { checkInclusion }
