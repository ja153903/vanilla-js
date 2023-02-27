/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const counter = new Map()
  for (const ch of s) {
    counter.set(ch, (counter.get(ch) ?? 0) + 1)
  }

  for (const ch of t) {
    if (!counter.has(ch)) {
      return false
    }

    counter.set(ch, (counter.get(ch) ?? 0) - 1)
  }

  for (const count of counter.values()) {
    if (count !== 0) {
      return false
    }
  }

  return true
}

export { isAnagram }
