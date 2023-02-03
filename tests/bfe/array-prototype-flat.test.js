import { flat } from '@/bfe/array-prototype-flat'

describe('flat', () => {
  it('should pass some sample test cases', () => {
    expect(flat([1, 2, [4, 3]])).toEqual([1, 2, 4, 3])
  })

  it('should pass some more cases', () => {
    const arr = [1, [2], [3, [4]]]

    expect(flat(arr)).toEqual([1, 2, 3, [4]])
    expect(flat(arr, 2)).toEqual([1, 2, 3, 4])
  })
})
