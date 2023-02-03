/**
 * @param {number} n
 * @return {number}
 */
export const tribonacci = function (n) {
  let a = 0
  let b = 1
  let c = 1

  if (n === 0) {
    return a
  }

  if (n <= 2) {
    return b
  }

  for (let i = 3; i <= n; i++) {
    ;[a, b, c] = [b, c, a + b + c]
  }

  return c
}
