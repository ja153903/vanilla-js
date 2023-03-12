/**
 * @param {string[]} tokens
 * @returns {number}
 */
const evalRPN = function (tokens) {
  // the idea here is to keep the numbers in a stack
  // whenever we hit an operation, we have to pop
  // the two numbers from the stack and then push the value
  // back into the stack

  const stack = []

  for (const token of tokens) {
    switch (token) {
      case '+':
      case '-':
      case '*':
      case '/':
        const second = stack.pop()
        const first = stack.pop()

        const expr = `${first} ${token} ${second}`

        stack.push(Math.trunc(eval(expr)).toString())
        break
      default:
        stack.push(token)
    }
  }

  return parseInt(stack.pop())
}

export { evalRPN }
