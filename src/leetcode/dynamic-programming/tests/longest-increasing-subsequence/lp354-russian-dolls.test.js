const {
  maxEnvelopes,
} = require('../../longest-increasing-subsequence/lp354-russian-dolls')

describe('maxEnvelopes', () => {
  it('should pass some sample tests', () => {
    expect(
      maxEnvelopes([
        [5, 4],
        [6, 4],
        [6, 7],
        [2, 3],
      ])
    ).toBe(3)
    expect(
      maxEnvelopes([
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toBe(1)
  })
})
