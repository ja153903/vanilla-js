/**
 * This requires a sliding window approach to solve.
 *
 * The window size we consider is the length of p
 * Once we've found a window with length of p, we can evaluate it
 * if it's an anagram of p, we can add the start index of that substring and move the
 * window forward.
 *
 * @param {string} s
 * @param {string} p
 * @returns {number[]}
 */
const findAnagrams = function (s, p) {
  /** @type {Map<string, number>} */
  const pMap = new Map()

  for (const char of p) {
    pMap.set(char, (pMap.get(char) ?? 0) + 1)
  }

  const result = []
  let start = 0
  // we take into account the number of uniqye keys in the map
  // because there can be duplicate values in the string
  let uniqueKeys = pMap.size

  for (let end = 0; end < s.length; end++) {
    if (pMap.has(s[end])) {
      pMap.set(s[end], pMap.get(s[end]) - 1)
      if (pMap.get(s[end]) === 0) {
        uniqueKeys--
      }
    }

    while (uniqueKeys === 0) {
      if (pMap.has(s[start])) {
        pMap.set(s[start], pMap.get(s[start]) + 1)
        if (pMap.get(s[start]) > 0) {
          uniqueKeys++
        }
      }

      if (end - start + 1 === p.length) {
        result.push(start)
      }

      start++
    }
  }

  return result
}

export { findAnagrams }
