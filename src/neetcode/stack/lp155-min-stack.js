class MinStack {
  constructor() {
    /** @type {[number, number][]} */
    this.stack = []
  }

  /**
   * @param {number} val
   * @returns {void}
   */
  push(val) {
    const min = this.stack.length === 0 ? val : Math.min(val, this.getMin())
    this.stack.push([val, min])
  }

  /**
   * @returns {void}
   */
  pop() {
    this.stack.pop()
  }

  /**
   * @returns {number}
   */
  top() {
    const [value, _min] = this.stack.at(-1)

    return value
  }

  /**
   * @returns {number}
   */
  getMin() {
    const [_value, min] = this.stack.at(-1)

    return min
  }
}

export { MinStack }
