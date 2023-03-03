/**
 * @param {string} text
 * @returns {string}
 */
function encryptThis(text) {
  return text
    .split(' ')
    .map((word) => {
      const parts = word.split('')
      parts[0] = parts[0].charCodeAt(0).toString()
      if (parts.length > 2) {
        ;[parts[1], parts[parts.length - 1]] = [
          parts[parts.length - 1],
          parts[1],
        ]
      }

      return parts.join('')
    })
    .join(' ')
}

export { encryptThis }
