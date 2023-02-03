import { longestStrChain } from '@/leetcode/dynamic-programming/longest-increasing-subsequence/lp1048-longest-string-chain'

describe('longestStrChain', () => {
  it('should pass some sample tests', () => {
    expect(longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca'])).toBe(4)
  })

  it('should pass another sample test', () => {
    expect(longestStrChain(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'])).toBe(5)
  })
})
