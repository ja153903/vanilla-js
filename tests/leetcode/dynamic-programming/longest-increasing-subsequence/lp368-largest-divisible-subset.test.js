import { largestDivisibleSubset } from '@/leetcode/dynamic-programming/longest-increasing-subsequence/lp368-largest-divisible-subset'

describe('largestDivisibleSubset', () => {
  it('should pass a sample case', () => {
    expect(largestDivisibleSubset([1, 2, 3])).toEqual([2, 1])
  })
})
