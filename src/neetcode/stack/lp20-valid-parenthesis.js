/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = []

  for (const ch of s) {
    switch (ch) {
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      case '(':
        stack.push(')')
        break
      case ']':
      case '}':
      case ')':
        if (stack.length === 0 || stack.at(-1) !== ch) {
          return false
        }
        stack.pop()
        break
    }
  }

  return stack.length === 0
}

export { isValid }
