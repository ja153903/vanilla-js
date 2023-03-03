/**
 * @param {string} s
 * @returns {boolean}
 */
function isPangram(s) {
  const visited = new Array(26).fill(false)

  for (const ch of s.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      visited[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = true
    }
  }

  return visited.every((value) => value)
}

export { isPangram }
