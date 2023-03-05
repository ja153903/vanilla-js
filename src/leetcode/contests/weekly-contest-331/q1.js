import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

import { sum } from '@/algorithms/arrays'

/**
 * @param {number[]} gifts
 * @param {number} k
 * @returns {number}
 */
const pickGifts = function (gifts, k) {
  const maxPq = MaxPriorityQueue.fromArray(gifts)

  for (let i = 0; i < k; i++) {
    const front = maxPq.dequeue()
    const sqrt = Math.floor(Math.sqrt(front))

    maxPq.enqueue(sqrt)
  }

  return sum(maxPq.toArray())
}

export { pickGifts }
