import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const counter = new Map()
  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }

  const entries = [...counter.entries()].map((entry) => ({
    value: entry[0],
    priority: entry[1],
  }))

  const pq = new MaxPriorityQueue((value) => value.priority)
  for (const entry of entries) {
    pq.enqueue(entry)
  }

  const result = []

  for (let i = 0; i < k; i++) {
    const front = pq.dequeue()
    result.push(front.value)
  }

  return result
}

export { topKFrequent }
