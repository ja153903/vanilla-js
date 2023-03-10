/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  // if for some reason t is longer than s, then we should return an empty string
  if (t.length > s.length) {
    return ''
  }

  // this problem can be solved using a sliding window algorithm
  // Given some string s and t where we have to find out if t is in s
  // note that it doesn't have to be in the precise order, but it has
  // to be a contiguous substring
  const counter = new Map()

  for (const ch of t) {
    counter.set(ch, (counter.get(ch) ?? 0) + 1)
  }

  let minStart = 0
  let minLength = Number.POSITIVE_INFINITY
  let length = t.length
  let start = 0

  for (let end = 0; end < s.length; end++) {
    counter.set(s[end], (counter.get(s[end]) ?? 0) - 1)

    if (counter.has(s[end]) && counter.get(s[end]) >= 0) {
      length--
    }

    while (length <= 0) {
      if (end - start + 1 < minLength) {
        minStart = start
        minLength = end - start + 1
      }

      counter.set(s[start], (counter.get(s[start]) ?? 0) + 1)
      // note that we only really care about incrementing length when
      // its a value that exists in t
      if (counter.get(s[start]) > 0) {
        length++
      }
      start++
    }
  }

  // if we have not found a minimum length, we should return an empty string
  // otherwise we should return the substring that begins at minStart and goes up to minLength
  return minLength === Number.POSITIVE_INFINITY
    ? ''
    : s.substring(minStart, minStart + minLength)
}

export { minWindow }
