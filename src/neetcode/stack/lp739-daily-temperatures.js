/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  // this is a monotonic stack problem
  // because we're looking for the next greatest element
  const n = temperatures.length
  const result = new Array(n).fill(0)
  const stack = []

  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
      const item = stack.pop()
      result[item] = i - item
    }

    stack.push(i)
  }

  return result
}

export { dailyTemperatures }
