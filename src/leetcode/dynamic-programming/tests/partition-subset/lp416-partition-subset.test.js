const {
  canPartition,
  canPartitionTLE,
} = require('../../partition-subset/lp416-partition-subset')

describe('partition subset', () => {
  it('should pass some sample tests', () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true)
    expect(canPartition([1, 2, 3, 5])).toBe(false)
  })
})

describe('partition subset - TLE', () => {
  it('should pass some sample tests', () => {
    expect(canPartitionTLE([1, 5, 11, 5])).toBe(true)
    expect(canPartitionTLE([1, 2, 3, 5])).toBe(false)
  })
})
