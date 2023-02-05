import { pickGifts } from '@/leetcode/contests/weekly-contest-331/q1'

describe('pickGifts', () => {
  test('case 1', () => {
    expect(pickGifts([25, 64, 9, 4, 100], 4)).toBe(29)
  })

  test('case 2', () => {
    expect(pickGifts([1, 1, 1, 1], 4)).toBe(4)
  })
})
