import { maxCount } from '@/leetcode/contests/biweekly-contest-97/q2'

describe('Biweekly Contest 97 Question 2', () => {
  it('case 1', () => {
    const banned = [1, 6, 5]
    const n = 5
    const maxSum = 6

    expect(maxCount(banned, n, maxSum)).toEqual(2)
  })

  it('case 2', () => {
    const banned = [1, 2, 3, 4, 5, 6, 7]
    const n = 8
    const maxSum = 1

    expect(maxCount(banned, n, maxSum)).toEqual(0)
  })

  it('case 3', () => {
    const banned = [11]
    const n = 7
    const maxSum = 50

    expect(maxCount(banned, n, maxSum)).toEqual(7)
  })

  it('case 4', () => {
    const banned = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const n = 9
    const maxSum = 50

    expect(maxCount(banned, n, maxSum)).toEqual(0)
  })
})
