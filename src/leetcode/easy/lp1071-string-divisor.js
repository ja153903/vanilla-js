import { gcd } from '@/algorithms/math'

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
export const gcdOfStrings = function(str1, str2) {
  // if we can concatenate the strings in reverse order
  // and get the same string, then we know that there is a gcd
  // otherwise we return an empty string
  return str1 + str2 === str2 + str1
    ? str1.slice(0, gcd(str1.length, str2.length))
    : ''
}
