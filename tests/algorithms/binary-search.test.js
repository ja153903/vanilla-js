const {
  binarySearch,
  findInsertionPoint,
} = require('@/algorithms/binary-search')

describe('Binary Search', () => {
  it('should be a proper implementation for binary search', () => {
    expect(binarySearch([1, 2, 3, 4], 3)).toBe(2)
  })
})

describe('Find Insertion Point', () => {
  it('should pass test case', () => {
    expect(findInsertionPoint([1, 2, 3, 4], 3)).toBe(2)
    expect(findInsertionPoint([1, 2, 3], 0)).toBe(0)
  })
})
