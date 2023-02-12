import { countFairPairs } from '@/leetcode/contests/weekly-contest-332/q2'

describe('countFairPairs', () => {
  test('case 1', () => {
    expect(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)).toBe(6)
  })
})
