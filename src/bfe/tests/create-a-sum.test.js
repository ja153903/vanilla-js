const { sum } = require('../create-a-sum')

describe('sum', () => {
  it('should pass a test case', () => {
    const sum1 = sum(1)

    expect(sum1(2) == 3).toBeTruthy()
  })
})
