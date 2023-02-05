/**
 * @param {string} char
 * @returns {boolean}
 */
const isVowel = (char) => {
  return (
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
  )
}

export { isVowel }
