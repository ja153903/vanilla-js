/**
 * @param {number} num
 */
function sum(num) {
  const func = function (otherNum) {
    return otherNum ? sum(num + otherNum) : num
  }

  // The reason we want to use valueOf here is that
  // this overrides the primitive representation of the function
  // so in the sample case, we check things like
  // sum1(2) == 3
  // since we're doing `==` we coerce the types and this means
  // we call the `valueOf` function when this happens
  func.valueOf = () => num

  return func
}

module.exports = { sum }
