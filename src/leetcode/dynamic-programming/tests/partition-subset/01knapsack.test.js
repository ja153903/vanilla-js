const { zeroOneKnapsack } = require('../../partition-subset/01knapsack')

describe('zeroOneKnapsack', () => {
  it('should pass some sample cases', () => {
    expect(zeroOneKnapsack([1, 2, 3], [6, 10, 12], 5)).toBe(22)
  })
})
