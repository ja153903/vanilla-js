import { topKFrequent } from '@/neetcode/arrays-and-hashing/lp347-top-k-frequent-elements'

describe('Top K Frequent Elements', () => {
  test('case 1', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
  })

  test('case 2', () => {
    expect(topKFrequent([1], 1)).toEqual([1])
  })
})
