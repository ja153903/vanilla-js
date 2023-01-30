const { curry } = require('@/bfe/curry')

describe('curry', () => {
  it('should pass some sample cases', () => {
    function join(a, b, c) {
      return `${a}-${b}-${c}`
    }

    const curriedJoin = curry(join)

    expect(curriedJoin(1, 2, 3)).toBe(`1-2-3`)
    expect(curriedJoin(1, 2)(3)).toBe(`1-2-3`)
    expect(curriedJoin(1)(2)(3)).toBe(`1-2-3`)
  })
})
