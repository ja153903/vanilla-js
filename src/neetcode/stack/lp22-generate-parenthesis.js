/**
 * @param {number} n
 * @returns {string[]}
 */
const generateParenthesis = function (n) {
  const result = []

  // to do this with a stack, we need to generate all possible combinations with a stack
  const stack = []

  // this should be our initial state because we only want to generate valid parentheses
  stack.push(['(', n - 1, n])

  while (stack.length) {
    const [path, left, right] = stack.pop()

    if (left === 0 && right === 0) {
      result.push(path)
    } else {
      if (left > 0) {
        stack.push([path + '(', left - 1, right])
      }

      if (left < right) {
        stack.push([path + ')', left, right - 1])
      }
    }
  }

  return result
}

export { generateParenthesis }
