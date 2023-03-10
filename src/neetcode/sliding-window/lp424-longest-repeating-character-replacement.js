/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  // this question is asking us to find the longest substring
  // of single characters that you can create from replacing
  // up to k characters
  // addressing this with a sliding window seems like the most
  // likely solution here.
  // we can extend our sliding window until we know that we cant
  // substitute the character with the max frequency k times
  // once we're at that point, we have to slide over our start pointer
  // Suppose we have s = "ABAB" and k = 2
  // currently we know that A has the max length so we roll with that
  const counter = new Map()

  let maxLength = 0
  let result = 0
  let start = 0

  for (let i = 0; i < s.length; i++) {
    // increment the counter
    counter.set(s[i], (counter.get(s[i]) ?? 0) + 1)

    // update the max length if we need to
    maxLength = Math.max(maxLength, counter.get(s[i]))

    // this condition means that we're checking if the
    // number of items we need to replace is greater than k
    // then this means that we should move the left pointer over
    while (i - start + 1 - maxLength > k) {
      counter.set(s[start], counter.get(s[start]) - 1)
      start++
    }

    result = Math.max(result, i - start + 1)
  }

  return result
}

export { characterReplacement }
