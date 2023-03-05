/**
 * @param {number[]} fruits
 * @returns {number}
 */
const totalFruit = function (fruits) {
  // keep track of how many fruits are currently in our window
  let fruitsInWindow = 0

  /** @type {Map<number, number>} */
  const mp = new Map()

  let start = 0

  let result = 0

  for (let end = 0; end < fruits.length; end++) {
    const fruit = fruits[end]
    if (!mp.has(fruit) || mp.get(fruit) === 0) {
      fruitsInWindow++
    }

    mp.set(fruit, (mp.get(fruit) || 0) + 1)

    if (fruitsInWindow <= 2) {
      result = Math.max(result, end - start + 1)
    }

    while (fruitsInWindow > 2) {
      // update the start of the window
      const startFruit = fruits[start]
      mp.set(startFruit, mp.get(startFruit) - 1)
      if (mp.get(startFruit) === 0) {
        fruitsInWindow--
      }
      start++
    }
  }

  return result
}

export { totalFruit }
