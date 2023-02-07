import { findAnagrams } from '@/leetcode/medium/lp438-find-all-anagrams-in-string'

describe('findAnagrams', () => {
  it('case 1', () => {
    expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
  })
})
