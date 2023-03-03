/**
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */
const strStr = function (haystack, needle) {
  if (haystack.length < needle.length) {
    return -1
  }

  let start = 0
  const needleLen = needle.length

  while (start < haystack.length - needleLen + 1) {
    if (haystack.substring(start, start + needleLen) === needle) {
      return start
    }

    start++
  }

  return -1
}

export { strStr }
