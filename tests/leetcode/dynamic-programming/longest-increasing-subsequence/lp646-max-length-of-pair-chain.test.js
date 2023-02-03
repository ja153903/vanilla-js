import { findLongestChain } from '@/leetcode/dynamic-programming/longest-increasing-subsequence/lp646-max-length-of-pair-chain'

describe('findLongestChain', () => {
  it('should pass some sample cases', () => {
    expect(
      findLongestChain([
        [1, 2],
        [2, 3],
        [3, 4],
      ])
    ).toBe(2)
  })

  it('should pass another sample case', () => {
    expect(
      findLongestChain([
        [1, 2],
        [7, 8],
        [4, 5],
      ])
    ).toBe(3)
  })
})
