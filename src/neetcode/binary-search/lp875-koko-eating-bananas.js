/**
 * @param {number[]} piles
 * @param {number} h
 * @returns {number}
 */
const minEatingSpeed = function (piles, h) {
  // k is the number of bananas koko eats from a pile
  // the minimum k is 1 and the maximum k is the max pile size
  let left = 1
  let right = Math.max(...piles)

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)

    // figure out if we can finish it
    if (canFinish(piles, mid, h)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

/**
 * @param {number[]} piles
 * @param {number} k
 * @param {number} h
 * @returns {boolean}
 */
function canFinish(piles, k, h) {
  let hours = 0

  for (const pile of piles) {
    hours += Math.floor(pile / k)
    if (pile % k) {
      hours++
    }
  }

  return hours <= h
}

export { minEatingSpeed }
