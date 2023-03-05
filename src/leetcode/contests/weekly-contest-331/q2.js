import { isVowel } from '@/algorithms/chars'

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @returns {number[]}
 */
const vowelStrings = function (words, queries) {
  // prefix sum might be the way to go here
  const ps = new Array(words.length).fill(0)

  words.forEach((word, i) => {
    if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
      ps[i]++
    }

    if (i > 0) {
      ps[i] += ps[i - 1]
    }
  })

  return queries.map(([l, r]) => {
    if (l === 0) {
      return ps[r]
    }

    return ps[r] - ps[l - 1]
  })
}

export { vowelStrings }
